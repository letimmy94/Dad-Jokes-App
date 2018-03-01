// require all our dependencies
const express = require("express");
const hbs = require("hbs");
const Joke = require("./models/Joke");
// create and set up express app
const app = express();

// define routes
app.get("/", (req, res) => {
  Joke.find({}).then(jokes => {
    res.render("index", { jokes });
  });
});

app.set("view engine", "hbs");

// start our server
app.listen(4000, () => console.log("Reporting for doodie port 4000"));
