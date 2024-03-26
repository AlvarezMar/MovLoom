//Define y exporta un enrutador para las rutas relacionadas con las peliculas.

const { Router } = require("express"); //Importa la propiedad Router de Express. Permite crear un nuevo enrutador.
const moviesRouter = require('./moviesRouter'); //Importa el enrutador de peliculas.

const router = Router(); //Crea una instancia de un nuevo enrutador.

router.use('/movies', moviesRouter); //Todas las rutas definidas en moviesRouter.js estarán disponibles bajo el prefijo '/movies'.

module.exports = router;