const { check, validationResult } = require('express-validator'); 
const { membersContext } = require('../db');
const { Member } = require('../models/');

const getAllMembers = async (req, res) => {
    const members = await membersContext.getAllMembers();
    res.send(members);
}

const getMembersById = async (req, res) => {
    const { memberId } = req.params;
    const members = await membersContext.getMembersById(memberId);
    res.send(members);
}

const getMembersByNameAndStatus = async (req, res) => {
    const { search } = req.params;
    const members = await membersContext.getMembersByNameAndStatus(search);
    res.send(members);
}

const createMember = async (req, res) => {

    const { memberId, memberName, joinedDate, status } = req.body;
    const member = new Member(memberId, memberName, joinedDate, status);
    
    const result =  await membersContext.addMember(member);
    res.sendStatus(result.statusCode);

}

const updateMember = async (req, res) => {

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