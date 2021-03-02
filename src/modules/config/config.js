const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    token: process.env.token,
    prefix: process.env.prefix,
    sqlHostname: process.env.sqlHostname,
    sqlUsername: process.env.sqlUsername,
    sqlPassword: process.env.sqlPassword,
    sqlDatabase: process.env.sqlDatabase
};