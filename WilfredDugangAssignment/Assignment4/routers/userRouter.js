const express = require('express');
//const { check, validationResult } = require('express-validator');

const { 
    userController: {
        getAllUsers,
        getUserByUsername,
        getUserByEmail,
        createUser,
        updateUser,
        deleteUser
    }
} = require('../controllers');

const router = express.Router();

router.get('/', getAllUsers);
router.get('/user/:username', getUserByUsername);
router.get('/user/:emailAddress', getUserByEmail);
router.post('/', createUser);
router.put('/user/:username', updateUser);
router.delete('/user/:username', deleteUser);

module.exports = router;