const Pizza = require('./interfaces/pizza');

class pepperoniPizza extends Pizza {
    prepare() {};
    getIngredients() { return []; };
}

module.exports = pepperoniPizza;