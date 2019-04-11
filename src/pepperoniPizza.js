const Pizza = require('./interfaces/pizza');

class PepperoniPizza extends Pizza {
    constructor() {
        super();
    }
    prepare() {
        this.ingredients.push('pepperoni');
    };
    getIngredients() {
        return this.ingredients;
    };
}

module.exports = PepperoniPizza;