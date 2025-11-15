//wap to print values from 1 to 10 
for (var i = 1; i <= 10; i++) // condition
 {
    console.log("Values in increment order " + i);
}
console.log("--------------------------------------");
//wap to print values from 10 to 1 
//initialization or strt point
//condition or end point j>=1
//decrement order j--
for (var j = 10; j >= 1; j--) {
    console.log("Value in decrement order: " + j);
}
//wap to print table of any number
var table = 5;
console.log("Table of ----->" + table);
for (var j = 1; j <= 10; j++) {
    console.log(table + " * " + " j " + " = " + table * j);
}
// WAP to print tables from 1 to 5
for (var i_1 = 1; i_1 <= 5; i_1++) {
    console.log("\nMultiplication Table for ".concat(i_1));
    for (var j_1 = 1; j_1 <= 10; j_1++) {
        console.log("".concat(i_1, " x ").concat(j_1, " = ").concat(i_1 * j_1));
    }
}
