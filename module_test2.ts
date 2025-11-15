//to access another test file all   variables, methods , class use keyword import


import { mystr } from "./module_test1";//dont add TS extension, this is for variable
import { myfunc } from "./module_test1";  //added function
import { myclass } from "./module_test1";

//mystr="welcomer vivek";
console.log()
//access variable directly 

myfunc();

var myc=new myclass(10,20);
console.log(myc.add());


//use below command only export and import command used
//tp compile use commnad  tsc --module command js .\module_test1.ts
