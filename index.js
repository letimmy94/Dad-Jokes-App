// require all our dependencies
const express = require("express");
const hbs = require("hbs");
// create and set up express app
const app = express();

// define routes
app.get("/", (req, res) => {
  res.render("index");
});

app.set("view engine", "hbs");

// start our server
app.listen(4000, () => console.log("Reporting for doodie port 4000"));
