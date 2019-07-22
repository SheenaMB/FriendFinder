var express = require("express");
var path = require("path");

//set up Express app
var app = express();
var PORT = process.env.PORT || 3001;

//sets up Express for data handling
app.use(express.urlencoded({ extended: true }));
app.use(express.json());