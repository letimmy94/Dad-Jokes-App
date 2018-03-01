# Planning

This is a dad joke app.

Features:
- Create a joke and save it to the database
- Edit jokes
- Delete jokes
- Show page for a joke
- User authentication (sign up and sign in)
- Associating data (jokes) with users

MVP
- Ability to create jokes
- Read jokes
- Homepage with feed of jokes

Bronze
- Signin/Signout
- Associate jokes to users
- Edit jokes

Silver
- Delete jokes
- User profile showing their jokes

Gold
- Commenting
- Tagging

STEPS
1. npm init -y
2. npm install -S express
3. create index.js
4. const express = require("express")
const app = express()

app.get("/", (request, response) => {
    response.send("Hello World")
})

app.listen(4000, () => {
    console.log("Reporting for doodie port 4000")
})
5. 