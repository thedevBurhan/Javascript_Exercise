// type:1

const names = ["buhari", "Eliyas", "burhan", "Basith", "Eliyas"];

function findPerson(item) {
  return item == "Eliyas";
}
const result = names.find(findPerson);
console.log(result);

// type:2

const Employee = [
  { Empname: "john", Empage: 25 },
  { Empname: "Alan", Empage: 22 },
  { Empname: "Alan", Empage: 30 },
];
const age = Employee.find(findAlan).Empage;

function findAlan(a) {
  return a.Empname == "Alan";
}
console.log(age);

// type:3

let arr = ["Bill", "Russel", "John", "Tom", "Eduard", "Alien", "Till"];
Array.prototype.myFind = function (a) {
  for (let i = 0; i < arr.length; i++) {
    a(arr[i], i, arr);
  }
};
arr.myFind((element, index, array) => {
  if (element[0] === "T") {
    console.log(`This is ${element} in index of ${index}`);
  }
});
