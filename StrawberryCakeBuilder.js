var LayerFactory = require('./LayerFactory');
var CreamFactory = require('./CreamFactory');
var ToppingFactory = require('./ToppingFactory');

function StrawberryCakeBuilder() {
    var layerFactory = LayerFactory.getInstance();
    var creamFactory = CreamFactory.getInstance();
    var toppingFactory = ToppingFactory.getInstance();

    return {
        buildCake: function() {
            return {
                layer: layerFactory.getLowCarb(),
                cream: creamFactory.getWhipped(),
                topping: toppingFactory.getStrawberry()
            }
        }
    };
}

module.exports = {
    getBuilder: StrawberryCakeBuilder
};
