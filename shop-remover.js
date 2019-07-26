var fs = require("fs");

/* This first block removes the file, throws err when not found. */
fs.unlink("./files/25072019/daily-shop.md", function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File removed.");
    }
});

/* This second block also removes the file, throws err when not found.
   So when first will already remove the file, this one will fail. */
try {
	fs.unlinkSync("./files/25072019/daily-shop.md");
} catch (err) {
    console.log(err);
}