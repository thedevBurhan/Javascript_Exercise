class Employee {
  empDetails(name, id, phonenumber) {
    this.name = name;
    this.id = id;
    this.phonenumber = phonenumber;
  }
  getEmpName() {
    return this.name + " " + this.id;
  }
  getEmpId() {
    return this.id;
  }
  getEmpPhonenumber() {
    return this.phonenumber;
  }
}

let Emp1 = new Employee();
Emp1.empDetails("Burhan", 1, 987654321);
let Emp2 = new Employee();
Emp2.empDetails("Eliyas", 2, 987654321);
let Emp3 = new Employee();
Emp3.empDetails("Buhari", 3, 987654321);

console.log(Emp1.getEmpName());
console.log(Emp2.getEmpName());
console.log(Emp3.getEmpName());
console.log(Emp1.getEmpPhonenumber());
console.log(Emp2.getEmpPhonenumber());
console.log(Emp3.getEmpPhonenumber());
