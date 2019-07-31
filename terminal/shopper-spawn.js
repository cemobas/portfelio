var spawn = require("child_process").spawn;

var cp = spawn("node", ["shopper-v2"]);

cp.stdout.on("data", function(data) {
	console.log(`STDOUT: ${data.toString()}`);
});

cp.on("close", function() {
    console.log("Child Process has ended");
    process.exit();
});
