const { check, validationResult } = require('express-validator'); 
const { userContext } = require('../db');
const { User } = require('../models');

const getAllUsers = async (req, res) => {
    const users = await userContext.getAll();
    res.send(users);
}

const getUserByUsername = async (req, res) => {
    const { username } = req.params;
    const user = await userContext.getUserByName(username);
    res.send(user);
}

const getUserByEmail = async (req, res) => {
    const { emailAddress } = req.params;
    const user = await userContext.getUserByEmail(emailAddress);
    res.send(user);
}

const createUser = async (req, res) => {

    const { userName, emailAddress, firstName, lastName } = req.body;
    const user = new User(userName, emailAddress, firstName, lastName);
    
    const result =  await userContext.addUser(user);
    res.sendStatus(result.statusCode);


}

const updateUser = async (req, res) => {
    const { username } = req.params;
    const { userName, emailAddress, firstName, lastName } = req.body;
    const user = new User(userName, emailAddress, firstName, lastName);
    
    const result =  await userContext.updateUserByUsername(username, user);
    res.json(result.statusCode);

}

const deleteUser = async (req, res) => {
    const { username } = req.params;

    const result = await userContext.deleteUserByUsername(username);
    res.json(result.statusCode);


}

module.exports = {
    getAllUsers,
    getUserByUsername,
    getUserByEmail,
    createUser,
    updateUser,
    deleteUser
}