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

//     //while implenetation dont change return type asnd data type

//     sum():number{
//         return(this.a+this.b);
//     }
    
//     mul():number{
//         return(this.x*this.y);
//     }
// }
// //create object of class
// var C1=new empdata1();
// C1.a=100;
// C1.b=200;
// C1.x=30;
// C1.y=20;
// console.log(C1.sum);
// console.log(C1.mul);

// approach 2 interface with class
//cannot create object of interface
//approach 2 interface with class
//cannot create object of interface
// 🔷 Interface IC1 – Base interface
interface IC1 {
  a: number;
  b: number;
  sum(): number;
}

// 🔷 Interface IC2 – Extends IC1
interface IC2 extends IC1 {
  x: number;
  y: number;
  Mul(): number;
}

// 🔷 Class C1 – Implements IC2
class C11 implements IC2 {
  a: number;
  b: number;
  x: number;
  y: number;

  // ✅ Constructor for initializing values
  constructor(a: number, b: number, x: number, y: number) {
    this.a = a;
    this.b = b;
    this.x = x;
    this.y = y;
  }

  // 🔹 Implements sum method from IC1
  sum(): number {
    return this.a + this.b;
  }

  // 🔹 Implements Mul method from IC2
  Mul(): number {
    return this.x * this.y;
  }
}

// 🔸 Instantiate the class and invoke methods
var c = new C11(100, 100, 2, 10);

console.log("Sum of a and b:", c.sum());        // Output: 200
console.log("Multiplication of x and y:", c.Mul()); // Output: 20
