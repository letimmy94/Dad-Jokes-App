// require all our dependencies
const express = require("express");
const hbs = require("hbs");
const Joke = require("./models/Joke");
const bodyParser = require("body-parser");
const jokesController = require("./controllers/joke");
// create and set up express app
const app = express();

app.set("view engine", "hbs");
app.use(bodyParser.urlencoded({ extended: true }));

// define routes
app.get("/", (req, res) => {
  Joke.find({}).then(jokes => {
    res.render("index", { jokes });
  });
});

app.use("/jokes", jokesController);

// start our server
app.listen(4000, () => console.log("Reporting for doodie port 4000"));
