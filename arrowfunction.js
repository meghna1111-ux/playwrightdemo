//arrow function : ->or lambda function
//Anoymous function //function without name 
var info = function () {
    console.log("this is get info function");
};
var myprint = function () { return console.log("This is print function"); };
var myadd = function (a, b) { return a + b; };
info(); //without parameter, function assign to variable name
myprint();
var addresults = myadd(45, 78);
console.log("Add results is--->" + addresults);
