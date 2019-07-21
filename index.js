var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
var cart = [];
var delayTime = 10000;
var user = grab('--user');
var id = grab('--id');
var exit = false;
var interval;
var shop;

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

rl.question("Which shop have you visited today?\n", function(answer) {

    shop = answer;
    refreshInterval();

    rl.setPrompt(`What have you bought?\n`);
    rl.prompt();
    
    rl.on('line', function(item) {
        if (item.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            refreshInterval();
            cart.push(item);
            rl.setPrompt(`What else? (exit to quit)\n`);
            rl.prompt();
        }
    });
});

rl.on('close', function() {
    process.stdout.write(`You have visite ${shop} to buy ${cart.toString()} today.\n`);
	process.exit();
});