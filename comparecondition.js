//wap to compare 3 numbers and find greator number
var firstnumber = 100;
var secondnumber = 50;
var thirdnumber = 45;
if (firstnumber > secondnumber && firstnumber > thirdnumber) {
    console.log("First number is greator---->", firstnumber);
}
else if (secondnumber > firstnumber && secondnumber > thirdnumber) {
    console.log("Second number is greator---->", secondnumber);
}
else if (thirdnumber > firstnumber && thirdnumber > secondnumber) {
    console.log("Third number is greator---->", thirdnumber);
}
else {
    console.log("All number are same and equal");
}
