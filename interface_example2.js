//Class to interface using implement
var empdata1 = /** @class */ (function () {
    function empdata1() {
    }
    //while implenetation dont change return type asnd data type
    empdata1.prototype.sum = function () {
        return (this.a + this.b);
    };
    empdata1.prototype.mul = function () {
        return (this.x * this.y);
    };
    return empdata1;
}());
//create object of class
var C1 = new empdata1();
C1.a = 100;
C1.b = 200;
C1.x = 30;
C1.y = 20;
console.log(C1.sum);
console.log(C1.mul);
