import { config } from 'dotenv'
config()

export const application = {
    port: process.env.PORT,
    node_env: process.env.NODE_ENV,
}

export const database = {
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    user: process.env.PG_USER,
    password: process.env.PG_PASSWORD,
    database: process.env.PG_DATABASE,
}
