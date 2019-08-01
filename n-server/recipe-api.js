var https = require("https");
var fs = require("fs");

/** This will execute GET method to the following url */
var options = {
	hostname: "en.wikipedia.org",
	port: 443,
	path: "/wiki/Cheeseburger",
	method: "GET"
};

var req = https.request(options, function(res) {

	var responseBody = "";

	console.log("Response from server started.");
	console.log(`Server Status: ${res.statusCode} `);
	console.log("Response Headers: %j", res.headers);

	res.setEncoding("UTF-8");

	res.once("data", function(chunk) {
		console.log(chunk);
	});

	res.on("data", function(chunk) {
		console.log(`--chunk-- ${chunk.length}`);
		responseBody += chunk;
	});

	/** Finally it will download the web content to a file. */
	res.on("end", function() {
		fs.writeFile("./public/cheeseburger.html", responseBody, function(err) {
			if (err) {
				throw err;
			}
			console.log("File Downloaded");
		});
	});

});

req.on("error", function(err) {
	console.log(`problem with request: ${err.message}`);
});

req.end();

