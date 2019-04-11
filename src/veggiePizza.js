const Pizza = require('./interfaces/pizza');

class VeggiePizza extends Pizza {
    prepare() {};
    getIngredients() { return []; };
}

module.exports = VeggiePizza;