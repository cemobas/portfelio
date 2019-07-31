/* jshint esnext: true */

var http = require("http");
var fs = require("fs");
var path = require("path");
var exec = require("child_process").exec;

/** This creates server and runs recipe-api process, which downloads a recipe
 * from bbc website. In the end, the downloaded file is read and displayed
 * (if run on a browser).
 */
http.createServer(function(req, res) {

  exec("node recipe-api", function(err, stdout) {
    
    if (err) {
        throw err;
    }

    console.log(`
                ########################
                ### Request invoked! ###
                ########################\n\n`);

    fs.readFile('./public/cheeseburger.html', "UTF-8", function(err, html) {
  
      if (err) {
        throw err;
      }
    
      console.log("Reading the recipe...");
      res.writeHead(200, {"Content-Type": "text/html"});
      res.end(html);
    });
  });
}).listen(3000);

console.log("Server running http://localhost:3000");
