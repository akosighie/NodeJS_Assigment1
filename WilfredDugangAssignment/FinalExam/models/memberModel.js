class Member {

    constructor(memberId, memberName, joinedDate, status, eventAttendance) {
        this.memberId = memberId
        this.memberName = memberName;
        this.joinedDate = joinedDate;
        this.status = status;
        this.eventAttendance = eventAttendance;
    }
}

module.exports = Member;