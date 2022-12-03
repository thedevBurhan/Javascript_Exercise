// task:1 -Write a function which accepts array of strings and prints all string with prepend text “Welcome”

// Say function name
// printAll

// Input: Names array
// [“Buhari”, “Eliyas”, “Burhan”];

// O/P
// Welcome Buhari
// Welcome Eliyas
// Welcome Burhan

/**function printingString(str) {
  for (var i = 0; i < 1; i++) {
    console.log(` Welcome ${str}`);
  }
}
printingString("Eliiyas");
printingString("buhari");
printingString("burhan");**/

var array = ["Buhari", "Eliyas", "Burhan"];
console.log(`Welcome ${array[0]}`);
console.log(`Welcome ${array[1]}`);
console.log(`Welcome ${array[2]}`);

function printArrOfNames(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(`Welcome using forloop ${arr[i]}`);
  }
}
printArrOfNames(array);

// task:3
function printEvenNumbersWithInLimit(endNumber) {
  for (i = 2; i < endNumber; i++) {
    if (i % 2 == 0) {
      console.log(`${i} is an even number`);
    }
    // else {
    //   console.log(`${i} is an odd number`);
    // }
  }
}

printEvenNumbersWithInLimit(50);



// Accessing array

// function notOfOperators() {
//   let a = 0;
//   if (!a) {
//     alert("Hi Burhan");
//   }
// }
// notOfOperators();

var max = (2, 5, 7, 8, 10);
console.log(Math.max(max));
console.log(Math.min(max));

var num = 7.8;
console.log(Math.round(num));
console.log(Math.floor(num));
console.log(Math.ceil(num));

var str1 = "Basith";
var name1 = str1.slice(1);
console.log(name1);
var name2 = str1.slice(2, 4);
console.log(name2);
// A string is converted to upper case with toUpperCase():
// A string is converted to lower case with toLowerCase():

var name2 = str1.charAt(2); // The charAt() method returns the character at a given position in a string
console.log(name2);

var str1 = "      hello world  ";
var name1 = str1.trim(); //The trim() method removes whitespace from both sides of a string:
console.log(name1);

// A string can be converted to an array with the split() method


var person = {
  firstName: "burhan",
  lastName: "Mohammed",
  age: 25,
  height: 5.7,
};
console.log(person.lastName + "-" + person["age"]);

var d = new Date();
console.log(d);
var month = d.getDay();
console.log(month);

// sort() in ascending order convert to array

var fruit = ["Grape", "apple", "orange", "Banana"];
var arrange = fruit.sort();
console.log(arrange);
console.log(arrange[1]);

// reverse() in descending order  convert to array
var arran = fruit.reverse();
console.log(arran);
console.log(arran[1]);

var ascending = [9, 8, 7, 5, 6, 2, 4];
var numAscending = ascending.sort();
console.log(numAscending);

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  if (a < b) {
    return -1;
  }
});

for(i=0;i<points.length;i++){
  if(a.points[i]<b.points[i])
  return -1;
}
console.log(points);
console.log(points[0]);

var arrange = fruit.join(""); //join() it will join the value in the array it an num,string..
console.log(arrange);

var joinAscending = ascending.join("-");
console.log(joinAscending);

// Array.prototype.myFilter = function (cb) {
//   var array = this;
//   var finalresult = [];
//   for (i = 0; i < array.length; i++) {
//     var result2 = cb(array[i], i, array);
//     if (result2) {
//       finalresult.push(array[i]);
//     }
//   }
//   return finalresult;
// };
// const filteredNumbers = numbers.filter(function (value, index, myArray) {
//   return value < 5;
// });

// console.log(filteredNumbers);

// const filteredNumbers1 = numbers.myFilter(function (value, index, myArray) {
//   return value > 7;
// });

// console.log(filteredNumbers1);


var filterNumber = [90, 800, 77, 6, 5, 4, 3, 2, 1];
var results = filterNumber
  .filter((a) => a % 2 == 0 && a > 89)
  .reduce((a, b) => a + b);
console.log(results);

var res = filterNumber.sort((a, b) => {
  if (a < b) {
    return -1;
  }
});
// .map((a, b) => a - b);
console.log(res);
