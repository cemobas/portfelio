var http = require("http");
var fs = require("fs");

http.createServer(function(req, res) {

	if (req.method === "GET") {
        
		res.writeHead(200, {"Content-Type": "text/html"});
        fs.createReadStream("./public/form.html", "UTF-8").pipe(res);
        
    /** Web form submit executes a POST call, which will visit this block of code. */
	} else if (req.method === "POST") {

        var body = "";
        
        /** Since data is collected as piled chunks, this will be triggered several times.
         * You can watch it by uncommenting console.log, bytes of chunks will be displayed
         * for each trigger.
        */
		req.on("data", function(chunk) {
            // console.log(chunk);
			body += chunk;
		});

		req.on("end", function() {
			res.writeHead(200, {"Content-Type": "text/html"});
			res.end(`
				<!DOCTYPE html>
				<html>
					<head>
						<title>Form Results</title>
					</head>
					<body>
						<h1>Your survey entry</h1>
						<p>${body}</p>
					</body>
				</html>
			`);
		});
	}

}).listen(3000);

console.log("Form server listening on port 3000");
