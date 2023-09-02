'use strict';

const express = require('express');
const activiteControll = require('../controllers/activiteController');
const router = express.Router();

router.get('/activites', activiteControll.getAllActivites);
router.get('/activite/:id', activiteControll.getActivite);
router.post('/activite', activiteControll.addActivite);
router.put('/activite/:id', activiteControll.updatActivite);
router.delete('/activite/:id', activiteControll.deleteActivite);


module.exports = {
    routes: router
}