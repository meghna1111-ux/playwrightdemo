var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Emp = /** @class */ (function (_super) {
    __extends(Emp, _super);
    function Emp(empno, name) {
        var _this = _super.call(this, name) || this; // calls Person's constructor
        _this.empno = empno;
        return _this;
    }
    Emp.prototype.display = function () {
        console.log("Employee No:", this.empno);
        console.log("Name:", this.name); // inherited property
    };
    return Emp;
}(Person));
// Example usage
var e1 = new Emp(101, "Meghna");
e1.display();
