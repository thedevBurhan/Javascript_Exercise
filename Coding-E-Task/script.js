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




