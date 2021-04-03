class Event {

    constructor(eventId, eventName, eventType, startDate, endDate, memberAttendance) {
        this.eventId = eventId
        this.eventName = eventName;
        this.eventType = eventType;
        this.startDate = startDate
        this.endDate = endDate;
        this.memberAttendance = memberAttendance;
    }
}

module.exports = Event;