import knex from 'knex'
import { database } from '../config/index.config.js'

const db = knex({
    client: 'pg',
    connection: {
        host: database.host,
        port: database.port,
        user: database.user,
        password: database.password,
        database: database.database,
    },
})
