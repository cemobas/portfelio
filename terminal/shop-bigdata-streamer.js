var fs = require("fs");

var stream = fs.createReadStream("./files/store/zabka.md", "UTF-8");

var data = "";

stream.once("data", function() {
	console.log("\n\n\n");
	console.log("Started Reading File");
	console.log("\n\n\n");
});

var i=0;
stream.on("data", function(chunk) {
	process.stdout.write(`\n######################### CHUNK `+(++i)+` START #########################\n`);
	process.stdout.write(`${chunk}`);
	process.stdout.write(`\n######################### CHUNK `+i+` END #########################\n`);
	data += chunk;
}); 

stream.on("end", function() {
	console.log("\n\n\n");
	console.log(`Finished Reading File ${data.length}`);
	console.log("\n\n\n");
});