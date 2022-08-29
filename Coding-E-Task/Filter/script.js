var filelist = [
  "file1.pdf",
  "file2.docx",
  "file3.mp3",
  "file4.docx",
  "file5.pdf",
  "file6.png",
];

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
var extension1 = ".docx";

function findFiles(a, b) {
  //arugement
  var result = a.filter(function (files) {
    //console.log(result);
    return files.endsWith(b);
  });
  return result;
}
var resultResponse = findFiles(largeFilelist, extensionStr);
var resultResponses = findFiles(filelist, extension1); //parameter
var resultResponse1 = findFiles(filelist, extension);
console.log(resultResponse);
console.log(resultResponses);
console.log(resultResponse1);





const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
function myFilter(cb, array) {
  var finalresult = [];
  for (i = 0; i < array.length; i++) {
    var result2 = cb(array[i]);
    if (result2) {
      finalresult.push(array[i]);
    }
  }
  return finalresult;
}

function myFilter1(cb, array) {
  var finnalres = [];
  for (i = 0; i < array.length; i++) {
    var res = cb(array[i], i, array);
    if (res) {
      finnalres.push(array[i]);
    }
  }
  return finnalres;
}

const result1 = myFilter(function (value, index, numbers) {
    return value > 5;
  }, numbers);
  
  // OutPut [ 6, 7, 8, 9 ]
  console.log(result1);
  
  const result2 = myFilter1(function (value, index, numbers) {
    return value < 5;
  }, numbers);
  console.log(result2);



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