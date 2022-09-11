/**
 * Task description: Write a method to creates a slice of array with n elements dropped from the beginning.
 * Expected Result: [1, 2, 3, 4, 5, 6] => [3, 4, 5, 6]
 * Expected Result: [1, 2, 3, 4, 5, 6] => [5, 6]
 *
 * @param {Array} array - Array of any elements
 * @param {Number} elementToDrop - number of elements to drop.
 * @returns {Array}
 * Don't use slice method !!
 */

// type:1
var numbers = [1, 2, 3, 4, 5, 6];
function elementToDrop(numbers, elementToDrop) {
  var remainingNums = [];
  for (i = elementToDrop; i < numbers.length; i++) {
    remainingNums.push(numbers[i]);
  }
  return remainingNums;
}
console.log(elementToDrop(numbers, 2));
console.log(elementToDrop(numbers , 4))
