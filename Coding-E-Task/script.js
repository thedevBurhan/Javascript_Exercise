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

for (i = 2; i < 50; i++) {
  if (i % 2 == 0) {
    console.log(`${i} is an even number`);
  }
}
// task:4

var filelist = [
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
];
var extension = ".docx";

var result = filelist.filter(function (file) {
  return file.endsWith(extension);
});

console.log(result);

var filelist = [
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
];
var extension = ".png";

var result = filelist.filter(function (file) {
  return file.endsWith(extension);
});

console.log(result);

// task:5

var number = [1, 2, 3, 4, 5];

let str = "welcome";
function iterateStr(str) {
  let splitedStr = str.split(""); // ARRAY SPLIT METHOD
  for (let j = 0; j < splitedStr.length; j++) {
    if (splitedStr[j] === "e") {
      console.log(splitedStr[j]);
    } else if (splitedStr[j] == "c") {
      console.log(splitedStr[j]);
    } else if (splitedStr[j] === "m") {
      console.log(splitedStr[j]);
    }
  }
}
iterateStr(str);

// Accessing array

function notOfOperators() {
  let a = 0;
  if (!a) {
    alert("Hi Burhan");
  }
}
notOfOperators();

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
var car = "hello";
var num = car.split("");
console.log(num);
for (i = 0; i < num.length; i++) {
  if (num[i] === "e") {
    console.log(num[i]);
  } else if (num[i] === "o") {
    console.log(num[i]);
  }
}

var person = {
  firstName: "burhan",
  lastName: "Mohammed",
  age: 25,
  height: 5.7,
};
console.log(person.lastName + "  " + person.age);

var d = new Date();
console.log(d);
console.log(d.getMonth);

// sort() in ascending order

var fruit = ["Grape", "Apple", "orange", "Banana"];
var arrange = fruit.sort();
console.log(arrange);
console.log(arrange[1]);

// reverse() in descending order
var arran = fruit.reverse();
console.log(arran);

var ascending = [9, 8, 7, 5, 6, 2, 4];
console.log(ascending.sort());

const points = [40, 100, 1, 5, 25, 10];
points.sort(function (a, b) {
  return a - b;
});
console.log(points);
console.log(points[0]);


