var ChocolateCakeBuilder = require('./ChocolateCakeBuilder');
var StrawberryCakeBuilder = require('./StrawberryCakeBuilder');
var TraditionalCakeBuilder = require('./TraditionalCakeBuilder');

function PastryCook() {
    var chocolateCakeBuilder = ChocolateCakeBuilder.getBuilder();
    var strawberryCakeBuilder = StrawberryCakeBuilder.getBuilder();
    var traditionalCakeBuilder = TraditionalCakeBuilder.getBuilder();

    return {
        buildCake: function(flavor) {
            var cake = null;
            switch (flavor) {
                case 'chocolate':
                    cake = chocolateCakeBuilder.buildCake();
                    break;
                case 'strawberry':
                    cake = strawberryCakeBuilder.buildCake();
                    break;
                default:
                    cake = traditionalCakeBuilder.buildCake();
                    break;
            }

            return cake;
        }
    };
}

module.exports = {
    getBuilder: PastryCook
};
