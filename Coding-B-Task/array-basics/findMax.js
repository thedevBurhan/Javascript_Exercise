/**
 * Find the maximun item in the array of Numbers.
 * @param [Numbers]
 * @return Number that is maximum
 *
 * Note :
 * - Use looping , conditionals
 * - Don't use any arr or obj methods.
 */

// type :1
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 100];
var max = Math.max(number);
for (i = 0; i < number.length; i++) {
  if (number[i] < max) {
    console.log(`less then max value ${number[i]}`);
  } else {
    console.log(`The Maximun value is ${number[i]}`);
  }
}

// type:2

var max = number[9];
for (i = 0; i < number.length; i++) {
  if (number[i] < max) {
    console.log(`less then max value ${number[i]}`);
  } else {
    console.log(`The Maximun value is ${number[i]}`);
  }
}

// type:3

var Numbers = [1, 2, 101, 45, 55, 1443];
var l = Numbers.length;
var max = -Infinity;
for (i = 0; l > i; i++) {
  if (Numbers[i] > max) {
    max = Numbers[i];
  }
}

// console.log(max);

// // type :5
var array = [1, 60, 20, 56, 32, 89, 32, 2, 300, 0];

function findMax(array) {
  var largest = array[0];
  for (i = 1; i < array.length; i++) {
    if (array[i] > largest) {
      largest = array[i];
    }
  }
  return largest;
}
var result = findMax(array);
console.log(result);

// type:6 find min
function findMini(array) {
  var largest = array[0];
  for (i = 1; i <= array.length; i++) {
    if (array[i] < largest) {
      largest = array[i];
    }
  }
  return largest;
}
var result = findMini(array);
console.log(result);
