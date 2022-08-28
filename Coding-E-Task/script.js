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
// task:4

var filelist = [
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
];
var extension1 = ".docx";
function findFiles(a, b) {
  //arugement
  var result = a.filter(function (files) {
    //console.log(result);
    return files.endsWith(b);
  });
  return result;
}

var number1 = 50;

var largeFilelist = [
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.exe",
  "file6.exe",
];
var extensionStr = ".exe";
var extension = ".png";
var resultResponse = findFiles(largeFilelist, extensionStr);
var resultResponses = findFiles(filelist, extension1); //parameter
var resultResponse1 = findFiles(filelist, extension);
console.log(resultResponse);
console.log(resultResponses);
console.log(resultResponse1);

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
var car = "hello";
var num = car.split("");
console.log(num);
for (i = 0; i < num.length; i++) {
  if (num[i] === "e") {
    console.log(num[i]);
  } else if (num[i] === "o") {
    console.log(num[i]);
  } else {
    // console.log(num[i]);
  }
}

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
console.log(points);
console.log(points[0]);

var arrange = fruit.join(""); //join() it will join the value in the array it an num,string..
console.log(arrange);

var joinAscending = ascending.join("-");
console.log(joinAscending);

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const filteredNumbers = numbers.filter(function (value, index, myArray) {
  return value > 5;
});

console.log(filteredNumbers);

const filteredNumbers1 = numbers.myFilter(function (value, index, myArray) {
  return value > 5;
});

console.log(filteredNumbers1);

// function MyArray() {}
// MyArray.filter = function() {};
// var myArr = new MyArray();
// myArr.filter((a) => a > 5);

// var finalresult = [];
const result1 = myFilter(function (value, index, numbers) {
  return value > 5;
}, numbers);

// OutPut [ 6, 7, 8, 9 ]
console.log(result1);

// how to write own filter
let items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let isEven = function (item) {
  return item % 2 === 0;
};
console.log(isEven);
const result = [];

for (let i = 0; i < items.length; i++) {
  if (isEven(items[i])) {
    result.push(items[i]);
  }
}

console.log(result);
// Result: [2, 4, 6, 8, 10]

// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Indian";
  this.fullname = function () {
    console.log(this.age);
    return this.firstName + " " + this.lastName;
  };
  this.printWifeName = function () {
    console.log(this.WifeName);
  };
}

this.color = "red";
const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const myBro = new Person("Alen", "Taylor", 25, "Brown");

myFather.WifeName = "Kulli";

console.log(
  myFather.fullname() +
    " is Handsome. " +
    myMother.firstName +
    " is beautiful. " +
    myBro.firstName +
    " is good boy " +
    "they are middle class family." +
    "They are " +
    myFather.printWifeName()
);

function Employee(first, last, id, mobileNumber) {
  this.firstName = first;
  this.lastName = last;
  this.id = id;
  this.mobileNumber = mobileNumber;
  this.fullname = function () {
    return this.firstName + " " + this.lastName;
  };
}

var burhanEmpoloyee = new Employee("burhan", "Sahid", "121", 01400310310);
var burhaariEmpoloyee = new Employee("Buhari", "Sahid", "121", 2132212);

Employee.prototype.company = "Aglisis";

var greeting = "hello";
function splitstr(greeting) {
  var iterategreeting = greeting.split("");
  for (i = 0; i < iterategreeting.length; i++) {
    if (iterategreeting[i] === "e") {
      console.log(iterategreeting[i] + " find the charcter");
    } else {
      console.log(iterategreeting[i]);
    }
  }
}
splitstr(greeting);

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
