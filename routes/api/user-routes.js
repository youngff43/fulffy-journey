const router = require('express').Router();
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/user-controller');

// set up GET all and and POST at /api/user
router
    .route('/')
        .get(getAllUsers)
        .post(createUser);

// set up GET one, PUT, and DELETE at /api/user/:id
router
    .route('/:id')
        .get(getUserById)
        .put(updateUser)
        .delete(deleteUser);

// set up POST and DELETE at /api/user/:userId/friends/:friendId
router
    .route('/:userId/friends/:friendId')
        .post(addFriend)
        .delete(deleteFriend);

module.exports = router;
