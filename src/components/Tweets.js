import React, { useEffect, useState } from "react";
import axios from "axios";
import "../css/Tweets.css";

function Tweets() {
  const [tweets, setTweets] = useState([]);

  useEffect(() => {
    axios.get("/getTweets").then((response) => {
      //console.log(response.data);

      setTweets(response.data);
    });
  }, []);

  // console.log(tweets);

  return (
    <section id="tweets">
      <h2 className="tweets-title">
        Tweets with the <p className="pink">#UX</p> hashtag
      </h2>
      <div className="tweets">
        <div className="tweets-body">
          <ul>
            {tweets.length !== 0 ? (
              tweets.map((tweet, i) => (
                <li className="tweet-row" key={i}>
                  <h5 className="tweet-name">{tweet.name}</h5>

                  <p className="tweet-text">{tweet.text}</p>
                </li>
              ))
            ) : (
              <li className="tweet-row">Loading...</li>
            )}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Tweets;
