var EventEmitter = require('events').EventEmitter;
var util = require('util');
var tools = require('./tools');
var Item = require('./model/item.js');
var Shopping = require('./model/shopping.js');

var furnitureBudget = 7000;

util.inherits(Shopping, EventEmitter);

var daily = new Shopping("Żabka");
daily.on('add', function(item) {
	daily.cart.push(item);
	daily.total += item.price;
	console.log(`You have ${daily.cart.length} items in your cart. Total: ${daily.total}`);
});

daily.emit('add', new Item("Cheddar", 10));
daily.emit('add', new Item("Kefir", 5));
daily.emit('add', new Item("Kurczak", 13));
tools.printItems(daily);

var furniture = new Shopping("Vox Meble");
furniture.on('add', function(item) {
	furniture.cart.push(item);
	furniture.total += item.price;
	console.log(`You've bought ${item.title}, budget left: ${furnitureBudget-furniture.total}`);
});

console.log(`\n`);

furniture.emit('add', new Item("Sofa", 5000));
furniture.emit('add', new Item("Stół", 700));
tools.printItems(furniture);

console.log(`\n`);
