import 'dotenv/config'
import { Sequelize } from 'sequelize'

const sequelize : Sequelize = new Sequelize({
    host: process.env.DATABASE_HOST,
    username: process.env.DATABASE_USERNAME,
    password: process.env.DATABASE_PASSWORD,
    database: process.env.DATABASE_NAME,
    dialect: 'mysql',
})

export default sequelize;
