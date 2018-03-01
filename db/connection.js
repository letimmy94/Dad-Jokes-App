const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/dad_jokes");
mongoose.Promise = Promise;

module.exports = mongoose;
