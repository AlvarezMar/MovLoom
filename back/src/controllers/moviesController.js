//Se define la función controladora.

const moviesService = require("../services/moviesService");

module.exports = {

    //Se define una función controladora de peliculas que toma dos argumentos: 'req' (solicitud entrante) y 'res' (respuesta que se envia al cliente). Esta función es llamada cada vez que se recibe una solicitud relacionada con '/movies' en el servidor.
    getMovies: async (req, res) => {
        try {
            const movies = await moviesService.getAllMovies();
            res.status(200).send(movies);
            
        } catch (error) {
            console.error('Error al obtener películas:', error);
            res.status(500).send('Error al obtener películas');
        }
    },

    postMovies: async (req, res) => {
        try {
            const {title, year, director, duration, genre, rate, poster, description} = req.body;
            const pelicula = await moviesService.postMovie({
                title, year, director, duration, genre, rate, poster, description
            })
            res.status(201).send(pelicula);

        } catch (error) {
            res.status(500).json({
                message: "Error al contener los datos",
                error: error.message
            })
        }
    }
};