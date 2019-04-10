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
});