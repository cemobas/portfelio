var readline = require('readline');
var tools = require('./tools');
var rl = readline.createInterface(process.stdin, process.stdout);
var delayTime = 10000;
var user = tools.grab('--user');
var id = tools.grab('--id');
var exit = false;
var Shopping = function(store) {
    this.store = store;
    this.cart = [];
}
var shopping;

tools.login(user,id);

rl.question("Which shop have you visited today?\n", function(answer) {

    shopping = new Shopping(answer);

    rl.setPrompt(`What have you bought?\n`);
    rl.prompt();
    
    rl.on('line', function(item) {
        if (item.toLowerCase().trim() === 'exit') {
            rl.close();
        } else {
            shopping.cart.push(item);
            rl.setPrompt(`What else? (exit to quit)\n`);
            rl.prompt();
        }
    });
});

rl.on('close', function() {
    process.stdout.write(`You have visited ${shopping.store} to buy ${shopping.cart.toString()} today.\n`);
	process.exit();
});