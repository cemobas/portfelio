var fs = require("fs");
var path = require("path");

fs.readdir('./files', function(err, files) {

	if (err) {
		throw err;
	}

    console.log("Reading Files...");
	console.log(files+ "/n");
    
    files.forEach(function(fileName) {
        var file = path.join(__dirname, "files", fileName);
        var stats = fs.statSync(file);
        if(stats.isFile() && fileName !== ".DS_Store") {

            fs.readFile(file, "UTF-8", function(err, contents) {

                console.log(contents);

            });

        }
    });

});
