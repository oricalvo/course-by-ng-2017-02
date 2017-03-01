
export class Employee {
    name;
    email;

    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    dump() {
        console.log(this.name);
        console.log(this.email);
    }
}

export class Programmer extends Employee {
    progLang;

    constructor(name, email, progLang) {
        super(name, email);

        this.progLang = progLang;
    }

    dump() {
        super.dump();

        console.log(this.progLang);
    }
}
