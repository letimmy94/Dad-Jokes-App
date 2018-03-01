// importing dependencies
const express = require("express");
const router = express.Router();
const Joke = require("../models/Joke");
const bodyParser = require("body-parser");

// create a new joke
router.post("/", (req, res) => {
  Joke.create(req.body).then(joke => {
    res.redirect(`/jokes/${joke.id}`);
  });
});

// define our routes
router.get("/new", (req, res) => {
  res.render("jokes/new");
});

// get a joke by its id
router.get("/:id", (req, res) => {
  Joke.findOne({ _id: req.params.id }).then(joke => {
    res.render("joke/show", joke);
  });
});

// export our router
module.exports = router;
