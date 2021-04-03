const express = require('express');
const { check, validationResult, body } = require('express-validator'); 

const { 
    memberController: {
        getAllMembers,
        getMembersById,
        getMembersByNameAndStatus,
        createMember,
        updateMember,
        deleteMember
    }
} = require('../controllers');

const memberRouter = express.Router();

memberRouter.get('/', getAllMembers);
memberRouter.get('/:memberId', getMembersById);
memberRouter.get('/search?name=&status', getMembersByNameAndStatus);
memberRouter.post('/', [
    check("memberName", "Member name is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
    check("timeIn", "Time-in  is required").not().isEmpty(),
    check("memberId", "Member Id  is required").not().isEmpty()
], createMember);
memberRouter.put('/', [
    check("memberName", "Member name is required").not().isEmpty(),
    check("status", "Status is required").not().isEmpty(),
    check("timeIn", "Time-in  is required").not().isEmpty(),
    check("memberId", "Member Id  is required").not().isEmpty()
], updateMember);
memberRouter.delete('/:memberId', deleteMember);

module.exports = memberRouter;