# Planning

This is a dad joke app.

Features:

* Create a joke and save it to the database
* Edit jokes
* Delete jokes
* Show page for a joke
* User authentication (sign up and sign in)
* Associating data (jokes) with users

MVP

* Ability to create jokes
* Read jokes
* Homepage with feed of jokes

Bronze

* Signin/Signout
* Associate jokes to users
* Edit jokes

Silver

* Delete jokes
* User profile showing their jokes

Gold

* Commenting
* Tagging

STEPS

1.  npm init -y
2.  npm install -S express
3.  create index.js
4.  const express = require("express")
    const app = express()

app.get("/", (req, res) => {
res.send("Hello World")
})
app.listen(4000, () => {
console.log("Reporting for doodie port 4000")
})

5.  Git ignore node modules by creating a .gitignore file
6.  Install handlebars
7.  app.set("view engine", "hbs");
8.  Change res.send("Hello World") to res.render("index")
9.  Create db folder and Connection.js file
10. Install Mongoose
11. In Connection.js:
    const mongoose = require("mongoose");
    mongoose.connect("mongodb://localhost/dad_jokes"); <--- dad_jokes could be anything
    mongoose.Promise = Promise;
    module.exports = mongoose;
12. Create models with Joke.js in it
13. const mongoose = require("../db/connection");
    const JokeSchema = new mongoose.Schema({});
    const Joke = mongoose.model("Joke", JokeSchema);
    module.exports = Joke;
14. node db/seed.js
15. Create controllers
16. Install body-parser
