function LayerFactory() {
    return {
        getStandard: function() {
            return 'Layer: [Standard]';
        },

        getAlmond: function() {
            return 'Layer: [Almond]';
        },

        getLowCarb: function() {
            return 'Layer: [LowCarb]';
        },
    };
}

module.exports = {
    getInstance: LayerFactory
};
