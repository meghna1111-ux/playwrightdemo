//arrow function : ->or lambda function
//Anoymous function //function without name 
let info= () =>
{
    console.log("this is get info function");
}
 let myprint =()=>console.log("This is print function");

let myadd = (a: number, b: number): number => {return a + b;};


 info();//without parameter, function assign to variable name
 myprint();
 var addresults=myadd(45,78);
 console.log("Add results is--->"+addresults);
