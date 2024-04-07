const config = require('../config/db');
const Seqeulize = require('sequelize');

const dataType = new Seqeulize(
    config.DB,
    config.USER,
    config.PASSWORD,
    {
        host: config.HOST,
        dialect: config.dialect
    }
); 