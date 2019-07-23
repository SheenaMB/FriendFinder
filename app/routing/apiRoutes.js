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

    app.post('/api/friends', function (req, res) {
        // res.json(friendsData);
        // console.log("-----req.body--------", req.body['scores[]']);
        // console.log("-----friendsData[1].scores--------:", friendsData[1].scores);



        let userAns = req.body['scores[]'];
        //convert just scores into an array
        let bestIndex = 0;
        friendsData.forEach(function (afriend, index) {
            let totalDiff = 0;
            let currentDiff = Number.MAX_SAFE_INTEGER;

            for (i = 0; i < userAns.length; i++) {
                let friendsScore = afriend.scores[i];
                let userScore = userAns[i];

                totalDiff += Math.abs(friendsScore - userScore);

            }
            if (totalDiff < currentDiff) {
                currentDiff = totalDiff;
                bestIndex = index;
            }
        });
        friendsData.push(req.body);
        res.json(friendsData[bestIndex]);

    });
}
