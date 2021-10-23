const launchOutput = require('../launchCodeRocks.js');

describe("launchOutput", function(){

  //testing code here...
  class Test {
  constructor(returnString, divisibleBy, inputNumber) {
    this.returnString = returnString;
    this.divisibleBy = divisibleBy;
    this.inputNumber = inputNumber;
  }
}

const phr1 = 'Launch';
  const phr2 = 'Code';
  const phr3 = 'Rocks!';
  const phr4 = '(CRASH!!!!)';
  const phr5 = 'Rutabagas! That doesn\'t work.'

const test1 = new Test(phr1, 2, 2);
const test2 = new Test(phr2, 3, 3);
const test3 = new Test(phr3, 5, 5);
const test4 = new Test(phr1 + phr2 + '!', '2 and 3', 6);
const test5 = new Test(phr2 + ' ' + phr3, '3 and 5', 15);
const test6 = new Test(phr1 + ' ' + phr3 + ' ' + phr4, '2 and 5', 10);
const test7 = new Test(phr1 + phr2 + ' ' + phr3, '2, 3, and 5', 30);
const test8 = new Test(phr5, 'NOT 2, 3, or 5', 7);

const tests = [test1, test2, test3, test4, test5, test6, test7, test8]

  //testing code here...
function runTest(str, divNum, inputNum) {
  it(`should return ${str} when input is divisible by ${divNum} evenly`, function() {
      expect(launchOutput(inputNum)).toEqual(str);
    });
}

for (i = 0; i < tests.length; i++) {
  runTest(tests[i].returnString, tests[i].divisibleBy, tests[i].inputNumber);   
};

});