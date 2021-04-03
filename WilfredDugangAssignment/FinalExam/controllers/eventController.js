const { check, validationResult, body } = require('express-validator'); 
const { eventsContext, attendanceContext, membersContext } = require('../db');
const { Event } = require('../models');

const getAllEvents = async (req, res) => {
    const events = await eventsContext.getAllEvents();
    res.send(events);
}

const getEventsById = async (req, res) => {
   
    const { eventId } = req.params;  
    const [event, attendanceList] = await Promise.all([eventsContext.getEventsById(eventId), attendanceContext.getAllAttendanceByEventId(eventId)]);
    const membersAttendance = [];
    

    attendanceList.forEach(attendance => {
        const member = {};
        member.Name = attendance.memberName;
        member.TimeIn = attendance.timeIn;
        member.TimeOut = attendance.timeOut;
        membersAttendance.push(member);
    });

    event.memberAttendance = [];
    event.memberAttendance = membersAttendance;
    res.send(event);
}

const getEventsSearch = async (req, res) => {
    const { searchParams } = req.params;
    const events = await eventsContext.getEventsSearch(searchParams);
    res.send(events);
}

const createEvent = async  (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { eventId, eventName, eventType, startDate, endDate } = req.body;
    const event = new Event(eventId, eventName, eventType, startDate, endDate);

    const dateStart = new Date(startDate);
    const dateEnd = new Date(endDate);

    if(dateEnd < dateStart)
    {
        return res.status(400).json({ error: "Invalid End Date!" });
    }
    else
    {
        const result =  await eventsContext.addEvent(event);
        res.sendStatus(result.statusCode);
    }
   
}

const updateEvent = async (req, res) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { eventId, eventName, eventType, startDate, endDate } = req.body;
    const event = new Event(eventId, eventName, eventType, startDate, endDate);
    
    const result =  await eventsContext.updateEvent(eventId, event);
    res.json(result.statusCode);

}

const deleteEvent = async (req, res) => {
    const { eventId } = req.params;

  const  attendanceList = await attendanceContext.getAllAttendanceByEventId(eventId);
    console.log(attendanceList);

    if(attendanceList.length > 0)
    {

        return res.status(400)
        .json({ error: "Cannot delete event due to members are registered." });
    }
    else
    {
        const result = await eventsContext.deleteEvent(eventId);
        res.json(result.statusCode);
    }
}

module.exports = {
    getAllEvents,
    getEventsById,
    getEventsSearch,
    createEvent,
    updateEvent,
    deleteEvent
}