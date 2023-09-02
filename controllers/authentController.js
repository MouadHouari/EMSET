'use strict';
const userData = require('../data/users');

const getAllActivites = async (req, res, next) => {
    try {

        const activitelist = await activiteData.getActivites();
        res.send(activitelist);        
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const getRole = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const role = await userData.getRoleById(userId);
        res.send(role);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

const addUser = async (req, res, next) => {
    try {

        const data = req.body;
        const userRole = data.userRole;
        
        if (userRole === 'superadmin') {
        const insert = await userData.creatUser(data);
        res.send(insert);
        } else {
            res.status(403).json({ message: 'Permission non accordée '+userRole });
          }

    } catch (error) {
        res.status(400).send(error.message);
    }
}

const loginUser = async (req, res) => {
  
    try {

        const data = req.body;
  
      const FetchedData = await userData.loginUser(data.email);
      
      if (FetchedData.length === 0) {
        res.send("Email non trouvée");
    } else {
        
        const userPassword = FetchedData[0].password;
        
        if (userPassword === data.password) {
            res.status(200).send("Vous êtes connecté");
        } else {
            res.status(200).send("Mot de passe eronné");
        }
    }
  
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    }
  }


const deleteUser = async (req, res, next) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userData.deleteUser(userId);
        res.send(deletedUser);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getAllActivites,
    getRole,
    addUser,
    loginUser,
    deleteUser
}