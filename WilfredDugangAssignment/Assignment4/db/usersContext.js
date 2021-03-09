const DatabaseContext = require('./dbContext');
const validator = require("email-validator");

class UsersContext extends DatabaseContext {
  constructor () {
    super('users');
  }

  async getAllUser () {
    return await this.getAll();
  } 

  async getUserByUsername (username) {
    return await this.getByAny('userName', username);
  } 

  async getUserByEmail (email) {
    return await this.getByAny('emailAddress', email);
  }

  async addUser (userDetails) {

     //check if username exist
     const  isExist = await this.getByAny('userName', userDetails.userName);

     if(Object.keys(isExist).length > 0)
     return {
      statusCode: 409
    }; 

    if(!validator.validate(userDetails.emailAddress))
       return {
      statusCode: 400
    }; 
     
     await this.insert(userDetails);
       return {
         statusCode: 200
       }; 

  } 

  async updateUserByUsername (username, userDetails) {

    //check if username exist
    const  isExist = await this.getByAny('userName', username);

    if(Object.keys(isExist).length == 0 )
    return {
      statusCode: 404
    }; 

    if(!validator.validate(userDetails.emailAddress))
    return {
      statusCode: 400
    }; 

    await this.update(username, userDetails);
    return {
      statusCode: 200
    }; 
      
  } 

  async deleteUserByUsername (username) {

    //check if username exist
    const isExist = await this.getByAny('userName', username);

    if(Object.keys(isExist).length == 0 )
    return {
      statusCode: 404
    }; 

    await this.delete(username);
    return {
      statusCode: 200
    }; 
  } 

}

module.exports = new UsersContext();
