var express = require("express");
var cors = require("cors");
var bodyParser = require("body-parser");
var app = express();

var shoppingList = [
    {
        item: "Egg",
        amount: "1 box of 10"
    },
    {
        item: "Rice",
        amount: "1 pack of 200 gr"
    },
    {
        item: "Banana",
        amount: "4"
    }
];

/** Parses posted json data sent to us as json. */
app.use(bodyParser.json());
/** Parses posted urlencoded data. Otherwise it looks like "[object HTMLInputElement]". 
 * extended: true, if you have large amount of nested data to parse. */
app.use(bodyParser.urlencoded({ extended: false }));

app.use(function(req, res, next) {
    console.log(`${req.method} request for '${req.url}'`);
    /** A web-site fires GET several times to load web content (you'll see as in console logs).
     * So without "next()", it won't ask for the next call and response won't be fulfilled;
     * hence page won't be loaded.
     */
	next();
});

/**
 * Static files are files that clients download as they are from the server.
 * In this case, public folder keeps those files. Express, by default does not allow you
 * to serve static files. You need to enable it using the following built-in middleware.
 */
app.use(express.static("./public"));

/** Cross Origin Resource Sharing to all the api requests.
 * It means that any domain can request to shopping-api.
 */
app.use(cors());

/** route: localhost:3000/shopping-api
 * express decorates req/res objects and extends their features. */
app.get("/shopping-api", function(req, res) {
	res.json(shoppingList);
});

app.post("/shopping-api", function(req, res) {
    /** Send in header
     * Content-Type:application/json */
    shoppingList.push(req.body);
    res.json(shoppingList);
});

app.delete("/shopping-api/:item", function(req, res) {
    shoppingList = shoppingList.filter(function(definition) {
        return definition.item.toLowerCase() !== req.params.item.toLowerCase();
    });
    res.json(shoppingList);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;