//wap to compare 3 numbers and find greator number

var firstnumber:number=100;
var secondnumber:number=50;
var thirdnumber:number=45;

//tc1 firstnumber=100, secondnumber=50,thirdnumber=45
//tc2 firstnumber=100, secondnumber=50,thirdnumber=45
//tc3 firstnumber=-20, secondnumber=-50,thirdnumber=-45
//tc4 firstnumber=100, secondnumber=100,thirdnumber=100

if(firstnumber>secondnumber && firstnumber>thirdnumber)
{
    console.log("First number is greator---->"+firstnumber);

}

else if(secondnumber>firstnumber && secondnumber>thirdnumber)
{
    console.log("Second number is greator---->"+secondnumber);
    
}

else if(thirdnumber>firstnumber && thirdnumber>secondnumber)
{
    console.log("Third number is greator---->"+thirdnumber);
    
}

else
{
    console.log("All number are same and equal");
}