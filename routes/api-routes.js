var db = require("../models");

module.exports = function(app) {
    app.get("/", function(req, res) {
        db.Burger.findAll().then(function(results) {
            res.render("index", {Burgers:results});
        });
    });

    app.post("/", function(req, res){
        var burger = req.body;

        db.Burger.create({
            burger_name: burger.burgername
        }).then(function(result) {
            return res.json(result);
        });
    });

    app.put("/api/burgers", function(req, res){
        db.Burger.update({
            devoured: true},
            {where: {id: req.body.id}}
        ).then(function(result) {
            return res.json(result);
        });
    });
};