const { check, validationResult } = require('express-validator'); 
const { membersContext, attendanceContext } = require('../db');
const { Member, Attendance } = require('../models/');

const getAllMembers = async (req, res) => {
    const members = await membersContext.getAllMembers();
    res.send(members);
}

const getMembersById = async (req, res) => {

    const { memberId } = req.params;
    const [member, attendanceList] = await Promise.all([membersContext.getMembersById(memberId), attendanceContext.getMemberByMemberId(memberId)]);
    const membersAttendance = [];

    attendanceList.forEach(attendance => {
        const event = {};
        event.EventName = attendance.eventName;
        event.TimeIn = attendance.timeIn;
        event.TimeOut = attendance.timeOut;
        membersAttendance.push(event);
    });

    member.eventAttendance = [];
    member.eventAttendance = membersAttendance;

    res.send(member);
}

const getMembersByNameAndStatus = async (req, res) => {
    const { search } = req.params;
    const members = await membersContext.getMembersByNameAndStatus(search);
    res.send(members);
}

const createMember = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { memberId, memberName, joinedDate, status, eventId, eventName, timeIn, timeOut } = req.body;
    const member = new Member(memberId, memberName, joinedDate, status);
    const attendanceMember = new Attendance(eventId, eventName, memberId, memberName, timeIn, timeOut);
    
    const selectedMember =  await  membersContext.getMembersById(memberId);
    
    if(Object.keys(selectedMember).length > 0)
    {
        const attendanceResult = await attendanceContext.registerMember(attendanceMember);
        return res.sendStatus(attendanceResult.statusCode);  
    }
    else
    {
        const [memberResult, attendanceResult] = await Promise.all([membersContext.addMember(member), attendanceContext.registerMember(attendanceMember)]);

        if(memberResult.success && attendanceResult.success)  
        res.sendStatus(200);
        else
        res.sendStatus(500); 
    }       
}

const updateMember = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { memberId, memberName, joinedDate, status } = req.body;
    const member = new Member(memberId, memberName, joinedDate, status);    
    
    const result =  await membersContext.updateMember(memberId, member);
    res.json(result.statusCode);

}

const deleteMember = async (req, res) => {
    const { memberId } = req.params;

    const result = await membersContext.deleteMember(memberId);
    res.json(result.statusCode);


}

module.exports = {
    getAllMembers,
    getMembersById,
    getMembersByNameAndStatus,
    createMember,
    updateMember,
    deleteMember
}