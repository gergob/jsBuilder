var LayerFactory = require('./LayerFactory');
var CreamFactory = require('./CreamFactory');
var ToppingFactory = require('./ToppingFactory');

function TraditionalCakeBuilder() {
    var layerFactory = LayerFactory.getInstance();
    var creamFactory = CreamFactory.getInstance();
    var toppingFactory = ToppingFactory.getInstance();

    return {
        buildCake: function() {
            return {
                layer: layerFactory.getStandard(),
                cream: creamFactory.getPeanutButter(),
                topping: toppingFactory.getStrawberry()
            }
        }
    };
}

module.exports = {
    getBuilder: TraditionalCakeBuilder
};
