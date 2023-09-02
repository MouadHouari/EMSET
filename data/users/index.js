'use strict';
const utils = require('../utils');
const config = require('../../config');
const sql = require('mssql');


const getRoleById = async(userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const role = await pool.request()
                            .input('userId', sql.Int, userId)
                            .query(sqlQueries.userRole);
        return role.recordset;
    } catch (error) {
        return error.message;
    }
}

const creatUser = async (userdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const insertActivite = await pool.request()
                            .input('name', sql.NVarChar(50), userdata.name)
                            .input('email', sql.NVarChar(50), userdata.email)
                            .input('password', sql.NVarChar(50), userdata.password)
                            .input('role', sql.VarChar(10), userdata.role)
                            .query(sqlQueries.createUser);                            
        return insertActivite.recordset;
    } catch (error) {
        return error.message;
    }
}

const loginUser = async(userdata) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const loginInfo = await pool.request()
                            .input('email', sql.NVarChar(50), userdata)
                            .query(sqlQueries.userlogin);
        return loginInfo.recordset;
    } catch (error) {
        return error.message;
    }
}

    const deleteUser = async (userId) => {
    try {
        let pool = await sql.connect(config.sql);
        const sqlQueries = await utils.loadSqlQueries('users');
        const deleteUser = await pool.request()
                            .input('userId', sql.Int, userId)
                            .query(sqlQueries.deleteUser);
        return deleteUser.recordset;
    } catch (error) {
        return error.message;
    }
}

module.exports = {
    getRoleById,
    creatUser,
    loginUser,
    deleteUser
}