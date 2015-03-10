var express = require("express");
var app = express();
var bodyparser = require("body-parser");
var port = process.env.PORT || 3000;

var piglatinify = require("./lib/piglatinify.js");

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: true }));

app.use(express.static(__dirname + "/app/"));

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
    punchline: "You can't tuna fish" },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octopus laugh",
    punchline: "Ten tickles" }
];

app.get("/joke", function(req, res) {
	var myJoke = randomIndexValue(jokes);
    res.json(myJoke);
});

//Creates endpoint at /person and setups the
//anonymous function that is called at that endpoint
app.get("/person", function(req, res) {
  //Creates an object
  var person = { firstName: "John", lastName: "Smith" };
  //Returns the object via the json method on the res (response) argument
  res.json(person);
});

app.get("/", function(req, res) {
  res.sendFile("index.html");
});

app.post("/piglatin", function(req, res) {
  var firstname = piglatinify(req.body.firstname);
  var lastname = piglatinify(req.body.lastname);
  var piglatined = { firstname: firstname, lastname: lastname };
  res.json(piglatined);
});

app.listen(port, function() {
  console.log("server started on port " + port);
});
