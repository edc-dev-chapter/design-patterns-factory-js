class PizzaFactory {
    createPizza (pizzaType) {
        return {
            prepare: () => {},
            getIngredients: () => []
        };
    };
}

module.exports = PizzaFactory;