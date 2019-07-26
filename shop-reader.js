var fs = require("fs");

fs.readdir('./files', function(err, files) {

	if (err) {
		throw err;
	}

	console.log(files);

});

console.log("Reading Files...");
