const express = require('express');
const mongoose = require('mongoose');
const routes = require('./mongo-api/routes/index');
const bodyParser = require('body-parser');
const server = express();

mongoose.Promise = global.Promise;

server.use(bodyParser.json());
routes(server);

server.listen(3050, () => {
    console.log("Ecoute sur le port 3050");

    //connexion à la base de donnée
    mongoose.connect('mongodb://127.0.0.1:27017/projet_db', {
        useMongoClient: true,
    });

    //évènement de controle sur la connexion a la base
    mongoose.connection
        .once('open', function () {
            console.log("Connexion à la mongoDB établie")
        })

        .on('error', (error) => {
            console.warn(' Warning', error);
        });
})
