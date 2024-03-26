//Define las rutas relacionadas con las peliculas.

const { Router } = require("express"); 
const moviesController = require("../controllers/moviesController"); //Importa el controlador de peliculas.

const moviesRouter = Router();

moviesRouter.get('/', moviesController.getMovies); //Cuándo se realiza una solicitud GET a '/movies', se ejecuta la función definida.

moviesRouter.post('/', moviesController.postMovies);

module.exports = moviesRouter;