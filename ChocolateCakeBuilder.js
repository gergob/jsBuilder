var LayerFactory = require('./LayerFactory');
var CreamFactory = require('./CreamFactory');
var ToppingFactory = require('./ToppingFactory');

function ChocolateCakeBuilder() {
    var layerFactory = LayerFactory.getInstance();
    var creamFactory = CreamFactory.getInstance();
    var toppingFactory = ToppingFactory.getInstance();

    return {
        buildCake: function() {
            return {
                layer: layerFactory.getStandard(),
                cream: creamFactory.getChocolate(),
                topping: toppingFactory.getChocolate()
            }
        }
    };
}

module.exports = {
    getBuilder: ChocolateCakeBuilder
};
