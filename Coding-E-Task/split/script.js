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