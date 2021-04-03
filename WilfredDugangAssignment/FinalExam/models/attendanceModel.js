class Attendance {

    constructor(eventId, eventName, memberId, memberName, timeIn, timeOut) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.memberId = memberId;
        this.memberName = memberName;        
        this.timeIn = timeIn;
        this.timeOut = timeOut;
    }
}

module.exports = Attendance;