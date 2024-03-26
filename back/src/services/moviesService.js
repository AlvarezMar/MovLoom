const Movie = require("../models/Movie");

module.exports = {
    getAllMovies: async () => {
        const movies = await Movie.find();
        return movies;
    },

    postMovie: async(movie) => {
        const newMovie = new Movie(movie);
        const savedMovie = await newMovie.save();
        return savedMovie;
    }
}