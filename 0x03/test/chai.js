
const chai = require('chai');

// expect style

const expect = chai.expect;

// should style

const should = chai.should();

let a = 1;
let b = 1;

// assert style

const assert = chai.assert;  //no chaining expressions

// expect(a).to.be.equals(b,'a is not equal to b');

// (a).should.be.equals(b,'a is not equal to b');

assert.equal(a,b,'a is not equal to b');

// object/string/bollean/number

function myObj(){
    return {
        a:100,
        b:'hello',
    }
}

x = new myObj();
y = new myObj();

// expect(x).to.be.equals(y,'x is not equal to y'); // this fails

// (x).should.be.equals(y,'x is not equal to y'); // this fails

// assert.equal(x,y,'x is not equal to y'); // this fails

// strict equal

// expect(x).to.be.deep.equals(y,'x is not equal to y'); // this passes

// (a).should.be.deep.equals(b,'a is not equal to b'); // this passes

assert.deepEqual(x,y,'x is not equal to y'); // this passes


// chaining expressions with keywords and, but, or.....

// expect(x).to.be.an('object').and.to.be.deep.equals(y,'x is not equal to y'); // this passes
// (x).should.be.an('object').and.to.be.deep.equals(y,'x is not equal to y'); // this passes

// array

let arr1 = [1,2,3,4,0];

// expect(arr1).to.be.an('array').that.includes(5,'5 is not included in the array'); // this fails
// (arr1).should.be.an('array').that.includes(4, '4 is not included in the array'); // this passes

assert.isArray(arr1, 'arr1 is not an array'); // this passes