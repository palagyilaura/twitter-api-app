const express = require("express");
const app = express();
const request = require('request');
const port = 5000; //react-tel ne ugyanazon a porton legyen!

app.get("/", (req, res) => {
    res.send("Hello world!")
});

const options = {
    'method': 'GET',
    'url': 'https://api.twitter.com/1.1/search/tweets.json?q=%23UX&count=10&tweet_mode=extended',
    'headers': {
        'Authorization': 'Bearer_Token'
    }
};

app.get("/getTweets", (req, res) => {
    request(options, function (error, response, body) {
        if (error) throw new Error(error);
        //console.log(response.body);

        let parseBody = JSON.parse(body)
        let tweets = parseBody["statuses"];
        let tweetList = [];

        for (let tweet in tweets) {
            //console.log(tweet, ":", tweets[tweet]["text"]);

            tweetList.push({ name: tweets[tweet]["user"]["name"], text: tweets[tweet]["full_text"] });
        }

        res.send(tweetList);
        console.log(tweetList);
    });
});

app.listen(port, () => console.log(`Listening on port ${port}`));
