//function in typescript
//void return type
//return
//take parameters
//name
//step1 Take Function with zero or no paramater
function get_info() {
    console.log("Today i had the wonderful day");
}
//step2 parameterized function
function add(a, b) {
    return a + b;
}
function callnumbers(a, b, c) {
    var total = a + b + c;
    return total;
}
get_info(); //calling function line 9
var myresult = add(100, 200); //calling function line 18
callnumbers(678, 899, 5466); //calling function 23
console.log("My Result is --->" + myresult);
function isuserActive(username) {
    if (username === "Meghna") {
        return true;
    }
    else if (username === "admin") {
        return false;
    }
    else {
        console.log("Username is not found -->" + username);
        return false; // or throw an error depending on desired behavior
    }
}
//anoymous function
var greet = function () {
    console.log("Hello Good mng");
};
//anoymous function with paramatere
var sum = function (a, b, c) {
    return a + b + c;
};
greet();
var addition = sum(67, 89, 90);
console.log("Addition of two numbers is" + addition); //156
