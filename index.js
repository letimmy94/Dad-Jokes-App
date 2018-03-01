// require all our dependencies
// create and set up express app
const express = require("express");
const app = express();

// define a route
app.get("/", (request, response) => {
  response.send("Hello World");
});

// start our server
app.listen(4000, () => console.log("Reporting for doodie port 4000"));
