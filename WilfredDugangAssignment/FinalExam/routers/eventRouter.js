const express = require('express');

const { 
    eventController: {
        getAllEvents,
        getEventsById,
        getEventsSearch,
        createEvent,
        updateEvent,
        deleteEvent
    }
} = require('../controllers');

const eventRouter = express.Router();

eventRouter.get('/', getAllEvents);
eventRouter.get('/:eventId', getEventsById);
eventRouter.get('/search?eventname=[searchEventName]&datestart=[searchDateStart]&dataend=[searchDateEnd]', getEventsSearch);
eventRouter.post('/', createEvent);
eventRouter.put('/', updateEvent);
eventRouter.delete('/:eventId', deleteEvent);

module.exports = eventRouter;