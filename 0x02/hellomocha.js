// To suite - Mathematical operations

//Test Cases
// 1. Addition
// 2. Subtraction
// 3. Multiplication
// 4. Division

var assert = require('assert');
  
describe('Mathematical operations', function() {
        var a = 20;
        var b = 10;
    it.skip('Addition of two numbers', function() {

        var c = a + b;
        
        assert.equal(c, 30);
    });

    it('Subtraction of two numbers', function() {

        var c = a - b;
        
        assert.equal(c, 10);
    });

    it('Multiplication of two numbers', function() {
        var c = a * b;

        assert.equal(c, 200);
    });

    it('Division of two numbers', function() {
        var c = a / b;

        assert.equal(c, 2);
    });
});