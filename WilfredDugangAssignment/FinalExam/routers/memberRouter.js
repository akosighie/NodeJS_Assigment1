const express = require('express');

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
memberRouter.post('/', createMember);
memberRouter.put('/', updateMember);
memberRouter.delete('/:memberId', deleteMember);

module.exports = memberRouter;