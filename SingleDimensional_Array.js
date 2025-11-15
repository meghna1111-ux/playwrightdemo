//Array Single dimensional var1="Meghna", var2="Sumit", var3="Ankur", var4="Soham"
//emp is Array variable name and []represents array
//Single Dimensional Approach1
var empdata = ["Meghna", "Sumit", "Ankur", "Soham"]; //both initialization and declaration
//Approach 2
var fruits;
fruits = ["Mango", "Apple", "Banana"];
console.log(empdata);
//multi type array approach1
var values = ["Meghna", 100, "Ankur", 50];
//Approach 2
var values2 = ["Mango", 500, "Banana", 60];
console.log(values);
//how to access specific array element
var empdata2 = ["Meghna", "Sumit", "Ankur", "Soham"];
console.log("First employee name is " + empdata2[0]); //Meghna
console.log("First employee name is " + empdata2[10]); //Undefined
console.log("Total empoyee length is " + empdata2.length);
//How to use for loop to read /extract all employees name
for (var i = 0; i < empdata2.length; i++) {
    console.log(i + "." + empdata2.length);
}
