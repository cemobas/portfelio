var path = require("path");

var cart = [];

function grab(flag) {
	var index = process.argv.indexOf(flag);
	return (index === -1) ? null : process.argv[index+1];
}

var user = grab('--user');
var id = grab('--id');

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

var exit = false;

process.stdin.on('data', function(data) {

    let input = data.toString().trim();
    exit = input == "exit";
	if (exit) {
        console.log(cart.toString());
		process.exit();
	} else {
        process.stdout.write(`What else? (exit to quit)\n`);
		cart.push(input);
	}

});

console.log(`What have you bought today?`);