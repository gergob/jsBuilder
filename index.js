var PastryCook = require('./PastryCook');

var cakeBuilder = PastryCook.getBuilder();

var chocolateCake = cakeBuilder.buildCake('chocolate');
var strawberryCake = cakeBuilder.buildCake('strawberry');
var cake = cakeBuilder.buildCake();

console.log("The Chocolate cake is compound of:");
console.log(JSON.stringify(chocolateCake, null, 2));

console.log("The Strawberry cake is compound of:");
console.log(JSON.stringify(strawberryCake, null, 2));

console.log("The cake is compound of:");
console.log(JSON.stringify(cake, null, 2));
