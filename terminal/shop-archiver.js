var fs = require("fs");

var FILES_FOLDER = "./files";
var DATE_FOLDER = "./files/25072019";
var VOX_DATE = "vox-25071029.md";

try {
    fs.renameSync(DATE_FOLDER+"/daily-shop.md", DATE_FOLDER+"/"+VOX_DATE);
    console.log("File renamed to vox-25071029.md");
}  catch (err) {
    console.log("Sth strange occured, probably file doesn't exist or already renamed.");
}

/** It even replaces the file with the same name. */
fs.rename(DATE_FOLDER+"/"+VOX_DATE, FILES_FOLDER+"/"+VOX_DATE, function(err) {
	if (err) {
		console.log(err);
	} else {
		console.log("vox-25071029.md moved successfully");
	}
});

/** We remove the current date folder, because it's archived.
 *  First files, if there's any...
*/
if(fs.readdirSync(DATE_FOLDER+"/").length > 0) {
	console.log(`Removing these files...\n`);
	fs.readdirSync(DATE_FOLDER+"/").forEach(function(fileName) {
		console.log(fileName+`\n`);
		fs.unlinkSync(DATE_FOLDER+"/" + fileName);
	});
}
/** Finally removing the folder. */
fs.rmdir(DATE_FOLDER, function(err) {
	if (err) {
		throw err;
	}
	console.log("Date directory removed.");
});