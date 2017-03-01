var {Employee, Programmer} = require("./employees");

var emp1 = new Employee("Ori", "ori@gmail.com");
//emp1.dump();

var emp2 = new Programmer("Roni", "roni@gmail.com", "JavaScript");
//emp2.dump();

var emps = [emp1, emp2];
for(var emp of emps) {
    emp.dump();
    console.log();
}

console.log(emp1 instanceof Employee);
console.log(emp2 instanceof Employee);
