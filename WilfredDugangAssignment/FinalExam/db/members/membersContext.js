const DatabaseContext = require('../members/memberDbContext');
const validator = require("email-validator");

class MembersContext extends DatabaseContext {
  constructor () {
    super('members');
  }

  async getAllMembers () {
    return await this.getAll();
  } 

  async getMembersById (memberId) {
    return await this.getByAny('memberId', memberId);
  } 

  async getMembersByNameAndStatus (search) {
    return await this.getByFilter(search);
  } 

  async addMember (memberDetails) {

     //check if member name exist
     const  isExist = await this.getByAny('memberName', memberDetails.memberName);

     if(Object.keys(isExist).length > 0)
     return {
      statusCode: 409
    }; 
     
     await this.insert(memberDetails);
       return {
         statusCode: 200,
         success: true
       }; 

  } 

  async updateMember (memberId, memberDetails) {

    //check if username exist
    // const  isExist = await this.getByAny('userName', username);

    // if(Object.keys(isExist).length == 0 )
    // return {
    //   statusCode: 404
    // }; 

    // if(!validator.validate(userDetails.emailAddress))
    // return {
    //   statusCode: 400
    // }; 

    await this.update(memberId, memberDetails);
    return {
      statusCode: 200
    }; 
      
  } 

  async deleteMember (memberId) {

    //check if username exist
    // const isExist = await this.getByAny('userName', username);

    // if(Object.keys(isExist).length == 0 )
    // return {
    //   statusCode: 404
    // }; 

    await this.delete(memberId);
    return {
      statusCode: 200
    }; 
  } 

}

module.exports = new MembersContext();
