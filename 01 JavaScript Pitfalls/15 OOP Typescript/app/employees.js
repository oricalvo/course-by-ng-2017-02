"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var Employee = (function () {
    function Employee(name, email) {
        this.name = name;
        this.email = email;
    }
    Employee.prototype.dump = function () {
        console.log(this.name);
        console.log(this.email);
    };
    return Employee;
}());
exports.Employee = Employee;
var Programmer = (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name, email, progLang) {
        _super.call(this, name, email);
        this.progLang = progLang;
    }
    Programmer.prototype.dump = function () {
        _super.prototype.dump.call(this);
        console.log(this.progLang);
    };
    return Programmer;
}(Employee));
exports.Programmer = Programmer;
//# sourceMappingURL=employees.js.map