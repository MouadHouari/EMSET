'use strict';

const express = require('express');
const authControll = require('../controllers/authentController');
const router = express.Router();

router.get('/role/:id', authControll.getRole);
router.post('/register', authControll.addUser);
router.post('/login', authControll.loginUser);
router.delete('/user/:id', authControll.deleteUser);


module.exports = {
    routes: router
}
