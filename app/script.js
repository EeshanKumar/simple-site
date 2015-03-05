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

$("button").on("click", function() {
	var url = $(this).attr("id");

	$.get("/" + url, function(response) {
		var resText;

		if (typeof response === "object") {
			resText = response.setup + ": " + response.punchline;
		}
		else {
			resText = response;
		}
	  	$("#ajax-" + url).text(resText);
  });
});

function Person(name) {
	this.name = name;
}

var array = [ new Person("Bill"), new Person("Tina"), new Person("Peter") ];
$.each(array, function() {
	console.log("Hello", this.name);
});
