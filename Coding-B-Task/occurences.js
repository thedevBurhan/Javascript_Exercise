/**
 * Task description: Write a function to know the occurence of a given word
 * @param string =  hardcorecoding
 * @output {object}
 *
 */
//   should return the highest word

// MohamedBurhan

// {
// m : 1
// o : 1
// h : 1
// }

var string = "MOHAMMEDBURHAN";
function findOccerence(str) {
  var splitedStr = str.split(""); 
  var emptyObject = {};
  var largest = 0;
  for (i = 0; i < splitedStr.length; i++) {
    var key = splitedStr[i];
    if (!emptyObject[key]) {
      emptyObject[key] = 1;
    } else if (emptyObject[key]) {
      emptyObject[key] += 1;
    }
  } 
  var values =Object.values(emptyObject);
  for (i = 0; i <= largest; i++) {
    if (values[i] > largest) {
      largest = values[i];
    }
  }
  return largest; //{M: 3, O: 1, H: 2, A: 2, E: 1, D:1, B:1, U:1, R:1, N:1}
}

console.log(findOccerence(string));
/** Pesudo Code
 *  1. split ---> Array
 *  2. Loop each item [i]
 *  3. let character = key[i]
 *  4. object[character] == item[i]
 *  5. object[character] = item[i]  = 1 +1
 *  3. Conditional finding with given array of item
 *  4. object = key : value ===== > repeated item + 1
 *  5. Object = {}
 *  6. let result = {key : valu e}
 *  7. result.key || result[key]
 *
 *
 * */

// let dog = {};
// let storage = 'voice'
// if(dog[storage]) {
//     dog[storage] = 'bow' + 1
// } else {
//     dog[storage] = 'bow'
// }

// console.log(dog)


// console.log(colour);
// let colour="red";

// let/const   Cannot access 'colour' before initialization
// var   undefined