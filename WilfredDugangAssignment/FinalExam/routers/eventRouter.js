const express = require('express');
const { check, validationResult, body } = require('express-validator'); 

const { 
    eventController: {
        getAllEvents,
        getEventsById,
        getEventsSearch,
        createEvent,
        updateEvent,
        deleteEvent,
        exportEventToExcel
    }
} = require('../controllers');

const eventRouter = express.Router();

eventRouter.get('/', getAllEvents);
eventRouter.get('/:eventId', getEventsById);
eventRouter.get('/search?eventname=[searchEventName]&datestart=[searchDateStart]&dataend=[searchDateEnd]', getEventsSearch);
eventRouter.get('/:export?eventId=[searchEventName]', exportEventToExcel);
eventRouter.post('/', [
    check("eventName", "Event Name is required").not().isEmpty(),
    check("eventType", "Event Type is required").not().isEmpty(),
    check("startDate", "Start Date  is required").not().isEmpty(),
    check("endDate", "End Date  is required").not().isEmpty()
], createEvent);
eventRouter.put('/', [
    check("eventName", "Event Name is required").not().isEmpty(),
    check("eventType", "Event Type is required").not().isEmpty(),
    check("startDate", "Start Date  is required").not().isEmpty(),
    check("endDate", "End Date  is required").not().isEmpty()
], updateEvent);
eventRouter.delete('/:eventId', deleteEvent);

module.exports = eventRouter;