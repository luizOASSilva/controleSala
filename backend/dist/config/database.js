"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const sequelize_1 = require("sequelize");
const sequelize = new sequelize_1.Sequelize({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: 'mysql',
});
function getEnvVar(name) {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Variável de ambiente ${name} não definida.`);
    }
    return value;
}
exports.default = sequelize;
