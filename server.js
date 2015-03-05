var express = require("express");
var app = express();
var port = process.env.PORT || 3000;

var stringArray = [
  "Har Har Har",
  "Wocka Flocka Docka",
  "Ting Tang Walla Walla Bing Bang",
  "Shobedo Op",
  "Check, check me out",
  "Hip Hop And You Don\'t Stop"
];

function randomIndexValue(array) {
  return array[Math.floor(Math.random() * array.length)];
}

app.get("/song", function(req, res) {
  res.send(randomIndexValue(stringArray));
});

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    pnchline: "You can't tuna fish" },
  { setup: "What do you get when you cross a cow and a duck?", 
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octopus laugh", 
    punchline: "Ten tickles" }
];

app.get("/joke", function(req, res) {
	var myJoke = randomIndexValue(jokes);
    res.json(myJoke.setup + "</br>" + myJoke.punchline);
});

app.get("/", function(req, res) {
  res.send("hello, universe");
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
