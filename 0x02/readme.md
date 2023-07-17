# Test Automation with MOCHA

### MOCHA
- It is a javascript testing framework

#### How to install

##### Install Globally

```
   $ npm install mocha -g
```
##### Intall as a development dependancy
```
   $ npm install --save-dev mocha
```
#### Check version
```
   mocha -version
```

### Function Calls
- MOCHA comes pre-bundled with two function calls;
   + describe()
      + It is a simple way to group tests in MOCHA 
      + It provides a feature to create a series of tests
      + It takes two arguments:
        1. The name/description of the test group
        2. The callback function wich is to be executed after another function has finish executing
   + it()
      + It is a way to describe the individual test cases
      + This tests should be nested with a describe() block

- Syntax

```
   describe('Description of the test', function(){ 
    it('About the test', function(){
        //Code to test the condition goes here
    })
   });

```


## MOCHA Hooks
- MOCHA provides four types of hoosks
   + before()
      - The before() hook will execute the code clock before the test executes from it() function.
   + after()
      - The after() hook will execute the code block after ll the tests execute
   + beforeEeach()
      - The beforeEach() hook will run the code block before every test execution
   + afterEach()
      - The afterEach() hook will be running the code block after every text execution
- N/B: All the 4 different hooks should be present within the describe() block otherwise none will be executed during the test execution

- Syntax

````

describe('Mocha Hooks', function(){

    before('Execute Before All Tests', function(){
        console.log('Execute Before All Tests');
    });

    beforeEach('Execute Before Each Test', function(){
        console.log('Execute Before Each Test');
    });

    after('Execute After All Tests', function(){
        console.log('Execute After All Tests');
    });

    afterEach('Execute After Each Test', function(){
        console.log('Execute Before Each Test');
    });

    it('Mocha Hooks Test', function(){
        console.log('Mocha - This is a Test for Mocha Hooks');
    })
})


````

## Unique Test Features

- MOCHA has test features to explicitly tell which tests should be executed and not to be executed, they include;
   + Exclusive Tests
      - The exclusivity feature allow you to run only the specified suite or test-case by appending <strong>.only()</strong> to the function
      - The <strong>.only() </strong> can be added to both the <strong>describe()</strong> and <strong>it()</strong> functions.
   + Inclusive Tests
      - This feature is the inverse of <strong>.only()</strong>. By appending <strong>.skip()</strong>, you may tell MOCHA to simply ignore these suite(s) and test case(s).
      - This is applicable in both pre-bundled functions i.e. <strong>describe()</strong> and <strong>it()</strong>
   + Pending Tests
      - Pending tests will be included in the test results, and marked peding. A pending test is not considered a failed test

+ Resources
       - [Mocha Documentation](https://mochajs.org/#inclusive-tests)


## Repoters

+ Mocha reporters are mostly terminal based.

+ There are different types of reporters available as part of Mocha, of which, spec and dot matrix are the commonly used reporter types.

 1. Spec reporter.
    +  It is the default reporter
    + The spec reporter outputs a hierarchical view according to the test cases.
2. dot matrix reporter
    + The dot matrix reporter is a series of characters which represent the test cases.
    + Failures are highlighted in the red exclamation mark, the pending tests with the blue comma and the slow tests as a yellow color.

- There are other types that are available like NYAN, TAP, Landing Strip, List, Progress, JSON, Json Stream.

- Syntax:
   + In order to get a custom report, we need to execute this command

   ```
     mocha test/ --reporter <specify type of reporter>
   ```


