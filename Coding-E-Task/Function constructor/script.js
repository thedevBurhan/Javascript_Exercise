// Constructor function for Person objects
function Person(first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
  this.nationality = "Indian";
  this.fullname = function () {
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

myFather.WifeName = "lisa";

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
var burhaariEmpoloyee = new Employee("Buhari", "Sahid", "121", 2132212)
Employee.prototype.company = "Aglisis";

console.log(
  burhaariEmpoloyee.fullname() +
    " is Handsome. " +
    burhanEmpoloyee.firstName +
    " is beautiful. " +
    burhanEmpoloyee.company
);
;