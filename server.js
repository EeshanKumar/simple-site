var http = require("http");
var url = require("url");
var fs = require("fs");

var server = http.createServer(function(req, res) {

  var pathname = url.parse(req.url).pathname;

  if (pathname === "/") {
	fs.readFile("./index.html", "utf8", function(err, data) {
      res.end(data);
    });
  } else if (pathname === "/song") {
	res.end(JSON.stringify(randomIndexValue(stringArray)));
  } else if (pathname === "/joke") {
	res.end(JSON.stringify(randomIndexValue(jokes)));
  } else {
	res.end("This server only responds to root-url requests");
  }
});

server.listen(8080, "localhost");
console.log("Server Running");

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

var jokes = [
  { setup: "What's the difference between a guitar and a fish?",
    punchline: "You can't tuna fish" },
  { setup: "What do you get when you cross a cow and a duck?",
    punchline: "Milk and quackers." },
  { setup: "How many tickles does it take to make an octopus laugh",
    punchline: "Ten tickles" }
];
