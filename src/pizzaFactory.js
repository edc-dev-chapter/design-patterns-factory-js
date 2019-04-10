const VeggiePizza = require('./veggiePizza');
const CheesePizza = require('./cheesePizza');
const PepperoniPizza = require('./pepperoniPizza');

class PizzaFactory {
    createPizza (pizzaType) {
        if (pizzaType === 'veggie') {
            return new VeggiePizza();
        }
        if (pizzaType === 'cheese') {
            return new CheesePizza();
        }
        if (pizzaType === 'pepperoni') {
            return new PepperoniPizza();
        }
        return {
            prepare: () => {},
            getIngredients: () => []
        };
    };
}

module.exports = PizzaFactory;