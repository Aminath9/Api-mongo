UserController=require('../controlleur/user-controller');

MovieController=require('../controlleur/movie-controller');

module.exports = (server) =>{
    server.get('/users',UserController.getUsers);
    server.get('/user/:id',UserController.getUser);
    server.post('/user',UserController.createUser);
    server.delete('/user',UserController.deleteUser);

    server.get('/movies',MovieController.getMovies);
    server.get('/movie/:id',MovieController.getMovie);
    server.post('/movie',MovieController.createMovie);
    server.delete('/movie',MovieController.deleteMovie);

    server.post('/autoInsertUsers/:number',UserController.autoInsertUsers);
    server.post('/autoInsertMovies/:number',MovieController.autoInsertMovies);
    
    server.get('/front.html', function(request, response) {
        response.sendfile('./front.html');
      });
    //server.delete('/movie',MovieController.delete);
    //server.delete('/user',UserController.deleteUser);








    
    
}
/*module.exports = (serveur) => {

    const express = require('express');
    const serveur = express();

    //1
    serveur.get("/users", (req, res) => {
        //console.log("Salut");
        res.send("Liste des Users");
    })

    //2
    serveur.get("/user/:id", (req, res) => {
        //console.log("Salut");
        res.send("Un User" + req.params.id);
    })

    //3
    serveur.post("/user", (req, res) => {
        //console.log("Salut");
        res.send("Un User est creer");
    })

    //4
    serveur.delete("/user", (req, res) => {
        //console.log("Salut");
        res.send("Un User est supprimer");
    })

    //5
    serveur.get("/movies", (req, res) => {
        //console.log("Salut");
        res.send("La liste des films");
    })

    //6
    serveur.get("/movie/:id", (req, res) => {
        //console.log("Salut");
        res.send("Un film" + req.params.id);
    })

    //7
    serveur.post("/movie", (req, res) => {
        //console.log("Salut");
        res.send("Un film est creer");
    })

    serveur.listen(3050, () => {
        console.log("Ecoute sur le port 3050");
    })

    
}*/