let friendsData = require("../data/friends");
// let app = express();

module.exports = function (app) {
    // let path = require("path");
    // let fs = require("fs");

    app.get("/api/friends", function (req, res) {
        // let friends = fs.readFile('./data/friends.js', 'utf8', function (err) {

        res.json(friendsData);
        if (err) throw err;
    });

    app.post('/api/friends', function (req, res){
        res.json(friendsData);
        console.log(res.json(friendsData));
        friendsData.push(req.body);

    });

}