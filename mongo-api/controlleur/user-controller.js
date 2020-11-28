const User = require('../models/users');

module.exports = {

    //recupérer tous les utilisateurs
    getUsers(req, res) {
        User.find().then((users) => {
            res.send(users);
           // users.forEach(element => res.send(element.name));
        })
            .catch((error) => {
                res.send("il y a eu un problem")
            });
    },

    //recupérer un utilisateur
    getUser(req, res) {
        const id = req.params.id;

        User.findById({ _id: id }).then((user) => {
            res.send({ user });
        })
    },

    //créer un utilisateur
    createUser(req, res) {
        const name = req.body.name;
        const age = req.body.age
        const user = new User({ name, age });
        user.save().then(() => {
            res.send({ user });
        });
    },

    //supprimer un utilisateur
    deleteUser(req, res) {
        const id = req.params.id;
        User.findByIdAndRemove({ _id: id }).then((user) => {
            res.send({ user });
        });
    },

    //inserer plusieurs utilisateur
    autoInsertUsers(req, res) {

        const number = req.params.number;

        for (let i = 0; i < number; i++) {

            let str = "User_" + i;

            const user = new User({ "name": str, "age": i });

            user.save().then(() => {
                res.send({ user });
            });

        }

    },

}