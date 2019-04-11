const expect = require('chai').expect;
const Utils = require('../utils/utils');

const Pizza = require('../src/interfaces/pizza');
const VeggiePizza = require('../src/veggiePizza');
const CheesePizza = require('../src/cheesePizza');
const PepperoniPizza = require('../src/pepperoniPizza');

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
        const veggiePizza = new VeggiePizza();
        veggiePizza.prepare();
        const ingredients = veggiePizza.getIngredients();
        expect(ingredients.length >= 2 && !ingredients.includes('pepperoni')).to.be.true;
    });

    it('cheese pizza should contain "double cheese"', () => {
        const cheesePizza = new CheesePizza();
        cheesePizza.prepare();
        const ingredients = cheesePizza.getIngredients();
        expect(ingredients.length >= 2 && ingredients.includes('double cheese')).to.be.true;
    });

    it('pepperoni pizza should contain "pepperoni"', () => {
        const pepperoniPizza = new PepperoniPizza();
        pepperoniPizza.prepare();
        const ingredients = pepperoniPizza.getIngredients();
        expect(ingredients.length >= 2 && ingredients.includes('pepperoni')).to.be.true;
    });
});