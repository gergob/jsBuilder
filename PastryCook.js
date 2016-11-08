var LayerFactory = require('./LayerFactory');
var CreamFactory = require('./CreamFactory');
var ToppingFactory = require('./ToppingFactory');


function PastryCook() {
    var layerFactory = LayerFactory.getInstance();
    var creamFactory = CreamFactory.getInstance();
    var toppingFactory = ToppingFactory.getInstance();


    return {
        buildChocolateCake: function() {
            return {
                layer: layerFactory.getStandard(),
                cream: creamFactory.getChocolate(),
                topping: toppingFactory.getChocolate(),
            };
        },

        buildStrawberryCake: function() {
            return {
                layer: layerFactory.getLowCarb(),
                cream: creamFactory.getWhipped(),
                topping: toppingFactory.getStrawberry(),
            };
        }
    };
}


module.exports = {
    getBuilder: PastryCook
};
