function ToppingFactory() {
    return {
        getChocolate: function() {
            return 'Topping: [Chocolate]';
        },

        getVanilla: function() {
            return 'Topping: [Vanilia]';
        },

        getStrawberry: function() {
            return 'Topping: [Strawberry]';
        },
    };
}

module.exports = {
    getInstance: ToppingFactory
};
