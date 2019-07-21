var path = require("path");

var cart = [];
var delayTime = 3000;
var user = grab('--user');
var id = grab('--id');
var exit = false;
var interval;

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}
function refreshInterval() {
    clearInterval(interval);
    interval = setInterval(function() {
        process.stdout.write(`Hurry up! We can't wait for you, dude...\n`);
    }, delayTime);
}

if (!user || !id) {
	console.log("You can't go on without name or id, sorry!");
    process.exit();
} else {
    process.stdout.write(`
            #######################
            ######  WELCOME  ######
            ######    TO    #######
            ###### PORTFELIO! #####
            #######################\n\n`);
}

if(user) {
	console.log(`User name: ${user}`);
}

if(id){
	console.log(`User ID: ${id}`);
}

refreshInterval();

process.stdin.on('data', function(data) {
    let input = data.toString().trim();
    exit = input == "exit";
	if (exit) {
		process.exit();
	} else {
        process.stdout.clearLine();
        process.stdout.cursorTo(0);
        process.stdout.write(`What else? (exit to quit)\n`);
        cart.push(input);
        refreshInterval();
	}
});

process.on('exit', function() {
	process.stdout.write("\n\n\n\n");
    process.stdout.write(`You have bought ${cart.toString()} today.`);
	process.stdout.write("\n\n\n\n");
});

console.log(`What have you bought today?`);