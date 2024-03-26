//Se configura y exporta una isntancia de Express.

const express = require('express'); //Se importa el modulo 'express'.
const morgan = require('morgan');
const cors = require('cors');

const router = require('./routes'); //Se importa el modulo routes desde routes/index.js. Contiene la configuración de las rutas de la app.

const app = express(); //Se crea una instancia de la aplicación Express llamada app.

//Middlewares por los que pasan las peticiones.
app.use(morgan('dev'));
app.use(cors());
app.use(express.json());

app.use(router); //Monta el enrutador en la aplicacion Express. Esto significa que las rutas definidas en Routes/index.js estarán disponibles para la app.

module.exports = app; //Exporta la instancia de Express para ser utilizada en otros archivos.