var bodyParser = require('body-parser');
var express = require('express');
var app = express();
var path = require('path')

var PORT = process.env.PORT || 3030;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

//sets up Express for data handling
// app.use(express.urlencoded({ extended: true }));
// app.use(express.json());


app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
    console.log("server listening on http://localhost:" + PORT);
});