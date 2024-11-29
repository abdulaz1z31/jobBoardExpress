// import { createLogger, transports, format } from 'winston'

// export const logger = createLogger({
//     level: 'silly',
//     format: format.combine(
//         format.timestamp(),
//         format.json(),
//         format.colorize({ all: true }),
//     ),
//     transports: [
//         new transports.Console(),
//         new transports.File({ filename: 'application.log' }),
//     ],
// })


import { createLogger, transports, format } from 'winston'

export const logger = createLogger({
    level: 'info',
    format: format.combine(
        format.timestamp(),
        format.colorize({ all: true }),
        format.simple(),
    ),
    transports: [
        new transports.Console(),
        new transports.File({ filename: 'application.log' }),
    ],
})