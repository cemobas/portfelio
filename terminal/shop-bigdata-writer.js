var fs = require("fs");

var store = "Zabka";
var md_init = store+`\n----------------\n`;

var md_data = `
* Papryka
* Pomarańcza
* Lemoniada
* Mięso
* Kiełbasa
* Jogurt
* Kiwi
* Zapałki
* Pomidor
* Sos
* Ryz
* Woda
* Serwetki
* Cukier
* Mąka
* Chleb
* Herbata czarna
* Herbata zielona
* Ciasto
* Wódka
* Banan
* Pesto
* Makaron
* Broccoli
* Zeszyt
* Coca-cola
* Piwo
* Rękawiczki
`;

if (fs.existsSync("./files/daily")) {
    console.log("Directory already there");
} else {
    fs.mkdir("./files/daily", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    });
}
var date = new Date();
var md = md_init;
for(var i=0; i<3000; ++i) {
    date.setDate(date.getDate() + 1);
    md += "\n----------\n"+date.toDateString()+"\n----------\n"
    console.log(date.toDateString() + " is processed...");
    md+=md_data;
}

if (fs.existsSync("./files/store")) {
    console.log("Directory already there");
} else {
    fs.mkdir("./files/store", function(err) {
        if (err) {
            console.log(err);
        } else {
            console.log("Directory Created");
        }
    });
}

fs.writeFile("./files/store/"+store.toLowerCase()+".md", md.trim(), function(err) {
    if (err) {
        console.log(err);
    } else {
        console.log("File Created");
    }
});