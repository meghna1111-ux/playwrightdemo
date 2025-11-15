//function in typescript
//void return type
//return
//take parameters
//name

//step1 Take Function with zero or no paramater

function get_info()
{
    console.log("Today i had the wonderful day")
}



//step2 parameterized function

function add(a: number, b: number): number {
    return a + b;
}


function callnumbers(a: number, b: number, c: number): number {
    let total = a + b + c;
    return total;
}

get_info();//calling function line 9
let myresult=add(100,200);   //calling function line 18
callnumbers(678,899,5466);//calling function 23
console.log("My Result is --->"+myresult);

function isuserActive(username: string): boolean {
    if (username === "Meghna") {
        return true;
    } else if (username === "admin") {
        return false;
    } else {
        console.log("Username is not found -->" + username);
        return false; // or throw an error depending on desired behavior
    }
}
//anoymous function
let greet=function()
{
console.log("Hello Good mng");
}

//anoymous function with paramatere
let sum=function(a:number, b:number, c:number):number//return type as number
{
return a+b+c;
}
greet();
let addition=sum(67,89,90);
console.log("Addition of three numbers is"+addition);//246