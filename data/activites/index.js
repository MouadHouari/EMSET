'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');

const getActivites = async () => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('activites');
        const activitesList = await pool.request().query(sqlQueries.activiteslist);
        return activitesList.recordset;
    } catch (error) {
        console.log(error.message);
    }
}

const getById = async(activiteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('activites');
        const activite = await pool.request()
                            .input('activiteId', sql.Int, activiteId)
                            .query(sqlQueries.activitebyId);
        return activite.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatActivite = async (activitedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('activites');
        const insertActivite = await pool.request()
                            .input('titre', sql.NVarChar(100), activitedata.titre)
                            .input('description', sql.NVarChar(1500), activitedata.description)
                            .input('type', sql.NVarChar(15), activitedata.type)
                            .input('lieu', sql.NVarChar(200), activitedata.lieu)
                            .input('date', sql.Date, activitedata.date)
                            .input('userId', sql.Int, activitedata.userId)
                            .query(sqlQueries.createActivite);                            
        return insertActivite.recordset;
    } catch (error) {
        return error.message;
    }
}

const updateActivite = async (activiteId, activitedata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('activites');
        const update = await pool.request()
                        .input('activiteId', sql.Int, activiteId)
                        .input('titre', sql.NVarChar(100), activitedata.titre)
                        .input('description', sql.NVarChar(1500), activitedata.description)
                        .input('type', sql.NVarChar(15), activitedata.type)
                        .input('lieu', sql.NVarChar(200), activitedata.lieu)
                        .input('date', sql.Date, activitedata.date)
                        .input('userId', sql.Int, activitedata.userId)
                        .query(sqlQueries.updateActivite);
        return update.recordset;
    } catch (error) {
        return error.message;
    }
}

const deleteActivite = async (activiteId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('activites');
        const deleteActivite = await pool.request()
                            .input('activiteId', sql.Int, activiteId)
                            .query(sqlQueries.deleteActivite);
        return deleteActivite.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getActivites,
    getById,
    creatActivite,
    updateActivite,
    deleteActivite
}