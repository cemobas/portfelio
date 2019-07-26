var fs = require("fs");

var md = `
Today's Shopping
===========

VOX Meble
----------------
* Sofa
* Szafka
`;

fs.writeFile("./files/sample.md", md.trim(), function(err) {
	console.log("File Created");
});