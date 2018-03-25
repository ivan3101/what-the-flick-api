const Bluebird = require('bluebird');
const Mongoose = require('mongoose');

Mongoose.connect('mongodb://localhost/whattheflick', {
    promiseLibrary: Bluebird
}).catch(err => console.log('No se pudo establecer conexión con MongoDB'));
Mongoose.connection
    .on('connecting', () => console.log('Conectando a la base de datos WhatTheFlick...'))
    .on('connected', () => console.log('Conexión establecida con la base de datos WhatTheFlick'))
    .on('disconnecting', () => console.log('Desconectando de la base de datos WhatTheFlick'))
    .on('disconnected', () => console.log('Desconectado de la base de datos WhatTheFlick'));

process
    .on('SIGINT', () => {
        Mongoose.connection.close(() => {
            console.log('Conexión a la base de datos cerrada (SIGINT)');
            process.exit(0);
        })
    })
    .on('SIGTERM', () => {
        Mongoose.connection.close(() => {
            console.log('Conexión a la base de datos cerrada (SIGTERM)');
            process.exit(0);
        })
    })
    .once('SIGUSR2', () => {
        Mongoose.connection.close(() => {
            console.log('Conexión a la base de datos cerrada (SIGUSR2)');
            process.kill(process.pid, 'SIGUSR2');
        })
    });