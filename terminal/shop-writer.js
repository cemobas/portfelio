var fs = require("fs");

var md = `
Today's Shopping
===========

VOX Meble
----------------
* Sofa
* Szafka
`;

if (fs.existsSync("./files/25072019")) {
    console.log("Directory already there");
} else {
    fs.mkdir("./files/25072019", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    });
}

fs.writeFile("./files/25072019/daily-shop.md", md.trim(), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File Created");
    }
});