class Event {

    constructor(eventId, eventName, eventType, startDate, endDate) {
        this.eventId = eventId
        this.eventName = eventName;
        this.eventType = eventType;
        this.startDate = startDate
        this.endDate = endDate;
    }
}

module.exports = Event;