// task 1: print 20 times

function printingString(str) {
  for (var i = 0; i < 20; i++) {
    console.log(str);
  }
}
// printingString("hello");
// printingString("buhari");
// printingString("burhan");

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
// findEvenAndOdd(num);

// task 4: finding even numbers

function findEvenNumber(arrayOfNumbers) {
  for (var i = 0; i < arrayOfNumbers.length; i++) {
    if (arrayOfNumbers[i] % 2 == 0) {
      console.log(`${arrayOfNumbers[i]}  is even number`);
    }
  }
}

var numb = [20, 19, 15, 16, 8, 4, 6, 9];
// findEvenNumber(numb);

// task 5: multiply of 9

function CheckMultiplyByNine(ninth) {
  for (var i = 0; i < ninth.length; i++) {
    if (ninth[i] % 9 == 0) {
      console.log(`${ninth[i]} is multiply by nine`);
    }
  }
}
var ninth = [
  8, 9, 17, 18, 26, 27, 33, 36, 44, 100, 98, 2, 45, 55, 54, 63, 62, 72, 77, 81,
  90,
];
// CheckMultiplyByNine(ninth);

//------------------------------------------------------------------

// task 6:finding even or odd nummers in ninth tables

function multiplybyninth(ninth) {
  for (var i = 0; i < ninth.length; i++) {
    if (ninth[i] % 2 == 0) {
      console.log(`${ninth[i]} is an even number`);
    } else {
      console.log(`${ninth[i]} is an odd number`);
    }
  }
}

multiplybyninth(ninth);

//------------------------------------------------------------------------------

// var x = 25;
// x += 10;
// console.log(x);

// function rev(num) {
//   for (var i = num.length; i >= 0; i--) {
//     console.log(num[i]);
//   }
// }
// var number = "987654321";
// rev(number);

// var v = false;
// console.log(Number(v));
