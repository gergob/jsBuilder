var PastryCook = require('./PastryCook');

var cakeBuilder = PastryCook.getBuilder();

var chocolateCake = cakeBuilder.buildChocolateCake();
var strawberryCake = cakeBuilder.buildStrawberryCake();

console.log("The Chocolate cake is compound of:");
console.log(JSON.stringify(chocolateCake, null, 2));

console.log("The Strawberry cake is compound of:");
console.log(JSON.stringify(strawberryCake, null, 2));
