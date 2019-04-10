const expect = require('chai').expect;
const PizzaFactory = require('../src/pizzaFactory');

describe('pizzaFactoryTest', () => {
    it('sanityCheckTest', () => {
        const pizzaFactory = new PizzaFactory();
        expect(pizzaFactory).not.undefined;
    })
});