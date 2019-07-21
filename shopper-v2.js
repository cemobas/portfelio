var EventEmitter = require('events').EventEmitter;
var util = require('util');
var tools = require('./tools');

var Shopping = function(store) {
	this.store = store;
	this.cart = [];
	this.total = 0;
};

var Item = function(title, price) {
	this.title = title;
	this.price = price;
};

var furnitureBudget = 7000;

util.inherits(Shopping, EventEmitter);

var daily = new Shopping("Żabka");
var furniture = new Shopping("Vox Meble");

daily.on('add', function(item) {
	daily.cart.push(item);
	daily.total += item.price;
	console.log(`You have ${daily.cart.length} items in your cart. Total: ${daily.total}`);
});

furniture.on('add', function(item) {
	furniture.cart.push(item);
	furniture.total += item.price;
	console.log(`You've bought ${item.title}, budget left: ${furnitureBudget-furniture.total}`);
});

daily.emit('add', new Item("Cheddar", 10));
daily.emit('add', new Item("Kefir", 5));
daily.emit('add', new Item("Kurczak", 13));
tools.printItems(daily);

console.log(`\n`);

furniture.emit('add', new Item("Sofa", 5000));
furniture.emit('add', new Item("Stół", 700));
tools.printItems(furniture);

console.log(`\n`);
