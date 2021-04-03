const DatabaseContext = require('../attendance/attendanceDbContext');

class AttendanceContext extends DatabaseContext {
  constructor () {
    super('attendance');
  }

  async getAllAttendanceByEventId (eventId) {
    return  await this.getByEventId(eventId);
  } 

  async getMemberByMemberId (eventId) {
    return  await this.getByMemberId(eventId);
  } 


  async registerMember (attendanceDetails) {    
     
     await this.insert(attendanceDetails);
       return {
         statusCode: 200,
         success: true
       }; 

  }  

}

module.exports = new AttendanceContext();
