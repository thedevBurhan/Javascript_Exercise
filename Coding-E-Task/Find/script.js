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

function findAlan(Employee) {
  return Employee.Empname == "Alan";
}
console.log(age);

// type:3

Array.prototype.myFind = function (a) {
  var v = "";
  for (let i = 0; i < this.length; i++) {
    var r = a(this[i], i, this);
    if (r == true) {
      v = this[i];
      break;
    }
  }
  return v;
};

Array.prototype.myFind = function (a) {
  for (let i = 0; i < this.length; i++) {
    if (a(this[i], i, this)) {
      return this[i];
    }
  }
  return undefined;
};

let arr = ["Bill", "Russel", "John", "Tom", "Eduard", "Alien", "Till"];

function myCb(element, index, array) {
  return element[0] === "T";
}
var result123 = arr.myFind(myCb);

console.log(result123);




function printName(a) {
  return a();
}

function getName() {
  return getBrotherName();
}

function getBrotherName() {




  return "Burhan";
}

console.log(printName(getName));
