function CreamFactory() {
    return {
        getBanana: function() {
            return 'Cream: [Banana]';
        },

        getPeanutButter: function() {
            return 'Cream: [Peanut Butter]';
        },

        getWhipped: function() {
            return 'Cream: [Whipped]';
        },

        getChocolate: function() {
            return 'Cream: [Chocolate]';
        },
    };
}

module.exports = {
    getInstance: CreamFactory
};
