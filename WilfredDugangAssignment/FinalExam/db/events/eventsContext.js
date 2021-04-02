const DatabaseContext = require('../events/eventsDbContext');
const validator = require("email-validator");

class EventsContext extends DatabaseContext {
  constructor () {
    super('events');
  }

  async getAllEvents () {
    return await this.getAll();
  } 

  async getEventsById (eventId) {
    return await this.getByAny('eventId', eventId);
  } 

  async getEventsSearch (search) {
    return await this.getEventsSearchQuery(search);
  }

  async addEvent (eventDetails) {

    //  //check if username exist
    //  const  isExist = await this.getByAny('userName', userDetails.userName);

    //  if(Object.keys(isExist).length > 0)
    //  return {
    //   statusCode: 409
    // }; 

    // if(!validator.validate(userDetails.emailAddress))
    //    return {
    //   statusCode: 400
    // }; 
     
     await this.insert(eventDetails);
       return {
         statusCode: 200
       }; 

  } 

  async updateEvent (eventId, eventDetails) {

    //check if username exist
   //onst  isExist = await this.getByAny('userName', username);

    // if(Object.keys(isExist).length == 0 )
    // return {
    //   statusCode: 404
    // }; 

    // if(!validator.validate(userDetails.emailAddress))
    // return {
    //   statusCode: 400
    // }; 

    await this.update(eventId, eventDetails);
    return {
      statusCode: 200
    }; 
      
  } 

  async deleteEvent (eventId) {

    //check if username exist
   //onst  isExist = await this.getByAny('userName', username);

    // if(Object.keys(isExist).length == 0 )
    // return {
    //   statusCode: 404
    // }; 

    // if(!validator.validate(userDetails.emailAddress))
    // return {
    //   statusCode: 400
    // }; 

    await this.delete(eventId);
    return {
      statusCode: 200
    }; 
      
  } 

}

module.exports = new EventsContext();
