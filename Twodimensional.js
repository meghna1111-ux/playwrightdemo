//2 D array declaration and initialization
var myarray = [[10, 20], [78, 98], [56, 89], [78, 23]];
console.log(myarray);
//2D Multi type array
var myarray2 = [[10, "ABC"], [56, "Meghna"], [45, "Soham"], [98, "Karan"]];
console.log(myarray2);
//Accessng specific array element
console.log(myarray2[0][1]); //ABC
console.log(myarray2[1][1]); //Meghna
//Use nested forloop for accesing all array elements
for (var i = 0; i < myarray2.length; i++) //Outer loop for Rows
 {
    for (var j = 0; j < myarray2[i].length; j++) //inner loop for Column
     {
        console.log(myarray2[i][j]);
    }
}
