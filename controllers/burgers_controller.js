const express = require("express");
const router = express.Router();

const burger = require("../models/burger.js");

router.get("/", (req, res) => {
    burger.all(data => {
        const object = {
            burgers: data
        };
        console.log(object);
        res.render("index", object);
    });
});

router.post("/api/burgers", (req, res) => {
    burger.create(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], result => {
        res.json({ id: result.insertId });
    });
});

router.put("/api/burgers/:id", (req, res) => {
    const condition = "id = " + req.params.id;
    console.log("condition", condition);
    burger.update(
        {
            devoured: req.body.devoured
        },
        condition,
        result => {
            if (result.changedRows === 0) {
                return res.status(404).end();
            }
            res.status(200).end();

        }
    );
});

router.delete("/api/burgers/:id", (req, res) => {
    burger.delete("id", req.params.id, (data) => {
        res.json(data);
    });
});

module.exports = router;
