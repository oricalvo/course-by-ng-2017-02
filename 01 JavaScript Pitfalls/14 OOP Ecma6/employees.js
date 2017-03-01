
class Employee {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    dump() {
        console.log(this.name);
        console.log(this.email);
    }
}

class Programmer extends Employee {
    constructor(name, email, progLang) {
        super(name, email);

        this.progLang = progLang;
    }

    dump() {
        super.dump();

        console.log(this.progLang);
    }
}

exports.Employee = Employee;
exports.Programmer = Programmer;
