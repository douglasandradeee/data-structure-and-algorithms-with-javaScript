var num = 0;
num = num + 2;
num = num * 3;
num = num / 2;
num++;      // increment
num--;      // decrement
num += 1;   // sum allocation (x += Y) == (x = x + y)
num -= 2;   // subtraction allocation (x -= Y) == (x = x - y)
num *= 3;   // multiplication allocation (x *= Y) == (x = x * y)
num /= 2;   // division allocation (x /= Y) == (x = x / y) 
num %= 3;   // rest allocation (x %= Y) == (x = x % y)

// - Logical operators
console.log('num == 1 : ' + (num == 1));    // equality
console.log('num === 1 : ' + (num === 1));  // equal (both the value and the type of the object)
console.log('num != 1 : ' + (num != 1));
console.log('num > 1 : ' + (num > 1));
console.log('num < 1 : ' + (num < 1));
console.log('num >= 1 : ' + (num >= 1));
console.log('num <= 1 : ' + (num <= 1));
console.log('true || false : ' + (true && false));  // logical operator and
console.log('true || false : ' + (true || false));  // logical operator or
console.log('!true : ' + (!true));  // logical operator negation

// - The typeof operator the typeof operator returns the type of variable or function
console.log('typeof num: ', typeof num);
console.log('typeof Douglas: ', typeof 'Douglas');
console.log('typeof true: ', typeof true);
console.log('typeof [1, 2, 3] ', typeof [1, 2, 3]);
console.log('typeof {name: John}: ', typeof { name: 'John' });

// - the delete operator deletes an object property
var myObj = { name: 'John', age: 21 };
delete myObj.age;
console.log(myObj);

// True or false examples
function testTruthy(val) {
    return val ? console.log('truthy') : console.log('falsy');
}

testTruthy(true);
testTruthy(false);
testTruthy(new Boolean(false));
testTruthy('');
testTruthy('Douglas');
testTruthy(new String(''));
testTruthy(1);
testTruthy(-1);
testTruthy(NaN);
testTruthy(new Number(NaN));
testTruthy({});
var objt = { name: 'John' };
testTruthy(objt)
testTruthy(objt.name)
testTruthy(objt.age)