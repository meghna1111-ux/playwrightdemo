// //approach2 interface and class  cannot create object of ineterface 
// interface I1//Parent interface
// {
//    a:number;
//    b:number;
//    sum():number;//declare method like variable method dont have body
// }
// //Interface to interface relation use extends keyword, class to class relation using extends keyword
// interface I2 extends I1
// {
// x:number;
// y:number;
// mul():number;
// }
// //Class to interface using implement
// class empdata1 implements I2{
//     a:number;
//     b:number;
//     x:number;
//     y:number;
// 🔷 Class C1 – Implements IC2
var C11 = /** @class */ (function () {
    // ✅ Constructor for initializing values
    function C11(a, b, x, y) {
        this.a = a;
        this.b = b;
        this.x = x;
        this.y = y;
    }
    // 🔹 Implements sum method from IC1
    C11.prototype.sum = function () {
        return this.a + this.b;
    };
    // 🔹 Implements Mul method from IC2
    C11.prototype.Mul = function () {
        return this.x * this.y;
    };
    return C11;
}());
// 🔸 Instantiate the class and invoke methods
var c = new C11(100, 100, 2, 10);
console.log("Sum of a and b:", c.sum()); // Output: 200
console.log("Multiplication of x and y:", c.Mul()); // Output: 20
