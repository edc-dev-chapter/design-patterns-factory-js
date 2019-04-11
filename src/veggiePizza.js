const Pizza = require('./interfaces/pizza');

class veggiePizza extends Pizza {
    prepare() {};
    getIngredients() { return []; };
}

module.exports = veggiePizza;