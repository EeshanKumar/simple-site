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

$(document).ready(function() {
	//This calls the jquery method get and puts in two arguments. The first is
	//the URL where the request was sent and the second is an anonymous function
	//that has an argument of the object or string sent to the url (first argument)
	$.get( "/person", function( data ) {
	  //This takes the data object and and puts it as the content of the #person element
	  $( "#person" ).text("FirstName: " + data.firstName + "  LastName: " + data.lastName);
	});
});


var array = [ new Person("Bill"), new Person("Tina"), new Person("Peter") ];
$.each(array, function() {
	console.log("Hello", this.name);
});
