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

app.post("/api/friends", function(req, res) {
    // req.body hosts is equal to the JSON post sent from the user
    // This works because of our body parsing middleware
    var newRes = req.body;
  
    // Using a RegEx Pattern to remove spaces from newRes
    // You can read more about RegEx Patterns later https://www.regexbuddy.com/regex.html
    newRes.routeName = newRes.name.replace(/\s+/g, "").toLowerCase();
  
    console.log(newRes);
  
    currentRes.push(newRes);
  
    res.json(newRes);
  });