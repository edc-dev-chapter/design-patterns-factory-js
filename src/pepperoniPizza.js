const Pizza = require('./interfaces/pizza');

class PepperoniPizza extends Pizza {
    prepare() {};
    getIngredients() { return []; };
}

module.exports = PepperoniPizza;