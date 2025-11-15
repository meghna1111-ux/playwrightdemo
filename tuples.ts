//how to use tuples

//var empid:number=56;
//var empname:String="Meghna";
//var empsal:number=68899;

//how to use and declare tuple

var employee=[56,"Meghna",68899];//javascript

var employee2:[number,string,number]=[56,"Meghna",68899];//typescript

console.log(employee2);

//acccess specific value

console.log("employee name is ----->"+employee2[1]);//Meghna
console.log("employee name is ----->" + employee2[2]);//68899

//add elements in tuple using push() method

var employee2:[number,string,number]=[56,"Meghna",68899];

console.log("Orignal tuple ------>"+employee2)
employee2.push(102,"Soham",1000);
employee2.push(102,"Karan",2000);
employee2.push(102,"Sonu",5000);

console.log("After adding new employee elements ---->", employee2);

//remove elements from tuple using pop method
employee2.pop;
console.log("After removing elements ---->",employee2);

//update element in tuple

var student: [number, string] = [101, "Virat"];

// Update name
//student[1] = "Virat Kohli";

console.log(student); // [101, "Virat Kohli"]


student[1] ="Virat Kohli";//update new value based on given index
console.log(student[1]);



