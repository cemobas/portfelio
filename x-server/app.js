var express = require("express");
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

/** route: localhost:3000/shopping-api
 * express decorates req/res objects and extends their features. */
app.get("/shopping-api", function(req, res) {
	res.json(shoppingList);
});

app.listen(3000);

console.log("Express app running on port 3000");

module.exports = app;