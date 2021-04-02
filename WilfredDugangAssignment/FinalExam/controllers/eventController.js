const { check, validationResult } = require('express-validator'); 
const { eventsContext } = require('../db');
const { Event } = require('../models');

const getAllEvents = async (req, res) => {
    const events = await eventsContext.getAllEvents();
    res.send(events);
}

const getEventsById = async (req, res) => {
    const { eventId } = req.params;
    const event = await eventsContext.getEventsById(eventId);
    res.send(event);
}

const getEventsSearch = async (req, res) => {
    const { searchParams } = req.params;
    const events = await eventsContext.getEventsSearch(searchParams);
    res.send(events);
}

const createEvent = async (req, res) => {

    const { eventId, eventName, eventType, startDate, endDate } = req.body;
    const event = new Event(eventId, eventName, eventType, startDate, endDate);
    
    const result =  await eventsContext.addEvent(event);
    res.sendStatus(result.statusCode);


}

const updateEvent = async (req, res) => {

    const { eventId, eventName, eventType, startDate, endDate } = req.body;
    const event = new Event(eventId, eventName, eventType, startDate, endDate);
    
    const result =  await eventsContext.updateEvent(eventId, event);
    res.json(result.statusCode);

}

const deleteEvent = async (req, res) => {
    const { eventId } = req.params;

    const result = await eventsContext.deleteEvent(eventId);
    res.json(result.statusCode);

}

module.exports = {
    getAllEvents,
    getEventsById,
    getEventsSearch,
    createEvent,
    updateEvent,
    deleteEvent
}