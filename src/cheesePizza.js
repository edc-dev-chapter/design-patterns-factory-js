const Pizza = require('./interfaces/pizza');

class CheesePizza extends Pizza {
    constructor() {
        super();
    }
    prepare() {
        this.ingredients.push('double cheese');
    };
    getIngredients() {
        return this.ingredients;
    };
}

module.exports = CheesePizza;