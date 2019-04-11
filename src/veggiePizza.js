const Pizza = require('./interfaces/pizza');

class VeggiePizza extends Pizza {
    constructor() {
        super();
    }
    prepare() {
        this.ingredients.push('veggies');
    };
    getIngredients() {
        return this.ingredients;
    };
}

module.exports = VeggiePizza;