const expect = require('chai').expect;
const Utils = require('../utils/utils');

const Pizza = require('../src/interfaces/pizza');
const VeggiePizza = require('../src/veggiePizza');
const CheesePizza = require('../src/cheesePizza');
const PepperoniPizza = require('../src/pepperoniPizza');
const PizzaFactory = require('../src/pizzaFactory');

describe('Tests', () => {
    it('VeggiePizza implements Pizza', () => {
        expect(Utils.implements(VeggiePizza, Pizza)).to.be.true;
    });
    
    it('CheesePizza implements Pizza', () => {
        expect(Utils.implements(CheesePizza, Pizza)).to.be.true;
    });

    it('PepperoniPizza implements Pizza', () => {
        expect(Utils.implements(PepperoniPizza, Pizza)).to.be.true;
    });

    it('veggie pizza should contain no "pepperoni"', () => {
        const pizzaFactory = new PizzaFactory();
        const pizza = pizzaFactory.createPizza('veggie');
        pizza.prepare();
        const ingredients = pizza.getIngredients();
        expect(ingredients.length >= 2 && !ingredients.includes('pepperoni')).to.be.true;
    });

    it('cheese pizza should contain "double cheese"', () => {
        const pizzaFactory = new PizzaFactory();
        const pizza = pizzaFactory.createPizza('cheese');
        pizza.prepare();
        const ingredients = pizza.getIngredients();
        expect(ingredients.length >= 2 && ingredients.includes('double cheese')).to.be.true;
    });

    it('pepperoni pizza should contain "pepperoni"', () => {
        const pizzaFactory = new PizzaFactory();
        const pizza = pizzaFactory.createPizza('pepperoni');
        pizza.prepare();
        const ingredients = pizza.getIngredients();
        expect(ingredients.length >= 2 && ingredients.includes('pepperoni')).to.be.true;
    });
});