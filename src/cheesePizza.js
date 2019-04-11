const Pizza = require('./interfaces/pizza');

class CheesePizza extends Pizza {
    prepare() {};
    getIngredients() { return []; };
}

module.exports = CheesePizza;