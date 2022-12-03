/**
 * Task description: Write a function to reverse a given item
 * Note : should not use reverse method
 */

function reverseStr(str) {
  var strng = str.toString();
  var result = "";
  for (i = strng.length - 1; i >= 0; i--) {
    // result = result + strng[i]; 
    result += strng[i]
  }
  return result;
}
console.log(reverseStr("ILOVEPROGRAMMING"));
console.log(reverseStr(123456789));
