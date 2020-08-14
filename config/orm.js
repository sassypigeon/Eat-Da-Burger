var connection = require("../config/connection.js");
var orm = {
    read: function getBurgers(cb) {
        var query = "select * from burgers";
        connection.query(query, function (err, result) {
            if (err) {
                throw err;
            }
            cb(result);
        })
    },

    create: function createBurger(burger_name, cb) {
        var query = "INSERT INTO burgers (burger_name) VALUES (?)"
        connection.query(query, [burger_name], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    },

    update: function eatBurger(id, cb) {
        var query = "UPDATE burgers SET devoured = true WHERE id = ?"
        connection.query(query, [id], function (err, result) {
            if (err) {
                throw err;
            }

            cb(result);
        });

    }
}

module.exports = orm;