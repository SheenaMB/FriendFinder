var express = require("express");
var path = require("path");

//set up Express app
var app = express();
var PORT = process.env.PORT || 4000;

//sets up Express for data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("server listening on http://localhost:" + PORT);
  });