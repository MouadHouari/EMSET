'use strict';
const activiteData = require('../data/activites');

const getAllActivites = async (req, res, next) => {
    try {

        const activitelist = await activiteData.getActivites();
        res.send(activitelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getActivite = async (req, res, next) => {
    try {
        const activiteId = req.params.id;
        const activite = await activiteData.getById(activiteId);
        res.send(activite);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addActivite = async (req, res, next) => {
    try {
        const data = req.body;
        
        const activiteType = data.type;
        const userRole = data.userRole;
        
        if (userRole === 'superadmin' || ((userRole === 'admin' || userRole === 'enseignant') && activiteType === 'Scolaire')) {
        const insert = await activiteData.creatActivite(data);
        res.send(insert);
        } else {
            res.status(403).json({ message: 'Permission non accordée '+userRole });
          }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const updatActivite = async (req, res, next) => {
    try {
        const activiteId =  req.params.id;
        const data = req.body;
        const updated = await activiteData.updateActivite(activiteId, data);
        res.send(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const deleteActivite = async (req, res, next) => {
    try {
        const activiteId = req.params.id;
        const deletedActivite = await activiteData.deleteActivite(activiteId);
        res.send(deletedActivite);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllActivites,
    getActivite,
    addActivite,
    updatActivite,
    deleteActivite
}