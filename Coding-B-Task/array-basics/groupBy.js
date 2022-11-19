






const employees = [
  {
    name: "buhari",
    batchNumber: "B1",
    department: "Tester",
    designation: "Senior Software Developer",
    age: "25",
    gender: "male"
  },
  {
    name: "eliyas",
    batchNumber: "B1",
    department: "IT",
    designation: "Director",
    age: "29",
    gender: "male"
  },
  {
    name: "burhan",
    batchNumber: "B2",
    department: "IT",
    designation: "Tester",
    age: "22",
    gender: "male"
  },
  {
    name: "vishak",
    batchNumber: "B3",
    department: "IT",
    designation: "Assosiate Developer",
    age: "25",
    gender: "male"
  },
  {
    name: "revi",
    batchNumber: "B4",
    department: "UX",
    designation: "Intern",
    age: "20",
    gender: "male"
  },
  {
    name: "nikitha",
    batchNumber: "B3",
    department: "UX",
    designation: "Intern",
    age: "21",
    gender: "Female"
  },
  {
    name: "pradeep",
    batchNumber: "B2",
    department: "Cyber Security",
    designation: "Senior Software Developer",
    age: "25",
    gender: "Femmale"
  },
];

let findDesignation= employees.filter(function(a){return a.designation === "Tester"});
// let findBatchNumber= employees.filter(function(a) {return a.batchNumber === "B1"});
// let findName= employees.filter(function(a) {return a.name === "nikitha"});
console.log(findDesignation)
// console.log([...findDesignation,...findBatchNumber,...findName]);





// let findTester = employees.filter(emp => emp.batchNumber === "B1");
// console.log(findTester);

// Tester : [  {
//     name: "buhari",
//     batchNumber: "B1",
//     department: "Tester",
//     designation: "Senior Software Developer",
//     age: "25",
//     gender: "male"
//   },

// B2: [{
    
// }]]
