const VeggiePizza = require('./veggiePizza');
const CheesePizza = require('./cheesePizza');
const PepperoniPizza = require('./pepperoniPizza');

class PizzaFactory {
    createPizza (pizzaType) {
        return {
            prepare: () => {},
            getIngredients: () => []
        };
    };
}

module.exports = PizzaFactory;