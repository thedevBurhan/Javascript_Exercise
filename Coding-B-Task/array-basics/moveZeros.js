/**
 * Write a function that should found the 0 and move to the last .
 * @param [Numbers]
 * @return [Numbers]
 *
 * Input - [0, 1, 2, 0, 100, 0, 0, 0, 9, 5 , 0, 7, 4]
 * Output Ans - [1, 2, 100, 9, 5, 7, 4, 0, 0, 0, 0, 0, 0]
 *
 * Note :
 * - Use looping , conditionals
 * - You can use array methods
 */

var number = [0, 1, 2, 0, 100, 0, 0, 0, 9, 5, 0, 7, 4];
function moveZeroToLast(number) {
  var head = [];
  var tail = [];
  for (i = 0; i < number.length; i++) {
    if (number[i] != 0) {
      head.push(number[i]);
    } else {
      tail.push(number[i]);
    }
  }
  return head.concat(tail);
  //   return [...head, ...tail]; Merging two array using ES6 Spread Operators
}
console.log(moveZeroToLast(number));
