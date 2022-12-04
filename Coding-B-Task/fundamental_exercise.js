// task 1: print 20 times

function printingString(str) {
  for (var i = 0; i < 20; i++) {
    console.log(str);
  }
}
printingString("hello");
printingString("buhari");
printingString("burhan");

// task 2: print 5 times each

function printStringWithNames(str) {
  for (var i = 0; i <= 20; i++) {
    if (i < 5) {
      //   console.log(str + " " + "Im" + " " + "Burhan");
      console.log(`${str} Im Burhan`); // usage of Template Literals
    } else if (i > 5 && i <= 10) {
      console.log(str + " " + "Im" + " " + "Buhari");
    } else if (i > 10 && i <= 15) {
      console.log(str + " " + "Im" + " " + "Basith");
    } else if (i > 15 && i <= 20) {
      console.log(str + " " + "Im" + " " + "Eliyas");
    }
  }
}
// printStringWithNames("hello"); 

// task 3: finding odd numbers

function findOddNum(arrayOfNumbers) {
  for (let i = 0; i < arrayOfNumbers.length; i++) {
    // Not Equal operator
    if (arrayOfNumbers[i] % 2 !== 0) {
      console.log(`${arrayOfNumbers[i]}  is odd number`);
    }
  }
}

let num = [20, 19, 15, 16, 8, 4, 6, 9];
// findOddNum(num);

function findEvenAndOdd(arrayofNumber) {
  for (let i = 0; i < arrayofNumber.length; i++) {
    if (arrayofNumber[i] % 2 == 0) {
      console.log(`${arrayofNumber[i]} is a even number `);
    } else {
      console.log(`${arrayofNumber[i]} is an odd number`);
    }
  }
}
findEvenAndOdd(num);

// task 4: finding even numbers

function findEvenNumber(arrayOfNumbers) {
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      console.log(`${arrayOfNumbers[i]}  is even number`);
    }
  }
}

var numb = [20, 19, 15, 16, 8, 4, 6, 9, 10];
findEvenNumber(numb);

// task 5: multiply of 9

function CheckMultiplyByNine(ninth) {
  for (var i = 2; i <= ninth; i++) {
    if (i % 9 == 0) {
      console.log(`${i} is multiply by nine`);
    }
  }
}

CheckMultiplyByNine(90);

//------------------------------------------------------------------

// task 6:finding even or odd nummers in ninth tables

function multiplybyninth(ninth) {
  for (var i = 2; i <= ninth; i++) {
    if (i % 9 == 0 && i % 2 == 0) {
      console.log(`${i} is an even number`);
    }
    // else {
    //   console.log(`${i} is an odd number`);
    // }
  }
}

multiplybyninth(90);

//------------------------------------------------------------------------------

function reverseanumber(a) {
  var reverse = a.split("");
  var reverses = reverse.reverse();
  console.log(`The given number in reverse order ${reverses}`);
}
// var revnumber = "123456789";
reverseanumber("123456789");

const arry = [
  "apple",
  "apple",
  "jack",
  "mango",
  "jack",
  "kiwi",
  "lemon",
  "mango",
];

function toFindDuplicates(a) {
  return a.filter(function (a, b) {
    return arry.indexOf(a) == b;
  });
}
var duplicateElements = toFindDuplicates(arry);
console.log(duplicateElements);

// -------------------------------------------------------------------------------------------------------------
function foo (dupl){

  let check;
  let b = [];

  for (i=0;i<dupl.length;i++){

if(dupl[i]!==check){
check = dupl[i];
b.push(check)
}
  }
return b ;

}

console.log(foo([1,1,2,2,3,3,3,4,4,4,4,5,5,]));