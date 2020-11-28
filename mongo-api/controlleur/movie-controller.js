const Movie = require('../models/movies');

module.exports = {
    //recupérer tous les films
    getMovies(req, res) {
        Movie.find().then((movie) => {
            res.send(movie);
        })
            .catch((error) => {
                res.send("il y a eu un problem")
            });
    },

    //récupérer un film
    getMovie(req, res) {
        const id = req.params.id;

        Movie.findById({ _id: id }).then((movie) => {
            res.send({ movie });
        })
    },

    //créer un film
    createMovie(req, res) {
        const title = req.body.title;
        const duration = req.body.duration
        const movie = new Movie({ title, duration });
        movie.save().then(() => {
            res.send({ movie });
        });
    },

    //supprimer un film
    deleteMovie(req, res) {
        const id = req.params.id;
        Movie.findByIdAndRemove({ _id: id }).then((movie) => {
            res.send({ movie });
        });
    },

    //inserer plusieurs utilisateur
    autoInsertMovies(req, res) {
        
        const number = req.params.number;

        for (let i = 0; i < number; i++) {
        
            let str = "Movie_" + i;

            const movie = new Movie({ "title": str, "duration": i });
            movie.save().then(() => {
                res.send({ movie });
            });
        }

    },


}