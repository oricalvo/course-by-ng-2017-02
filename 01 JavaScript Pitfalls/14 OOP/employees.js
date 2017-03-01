
function Employee(name, email) {
    this.name = name;
    this.email = email;
}

Employee.prototype.dump = function() {
    console.log(this.name);
    console.log(this.email);
}

function Programmer(name, email, progLang) {
    Employee.call(this, name, email);

    this.progLang = progLang;
}

Programmer.prototype = Object.create(Employee.prototype);

Programmer.prototype.dump = function() {
    Employee.prototype.dump.call(this);

    console.log(this.progLang);
}

exports.Employee = Employee;
exports.Programmer = Programmer;
