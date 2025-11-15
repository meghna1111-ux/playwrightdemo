//named function

function register()//create and declare function
{
    console.log("Register is done username --admin and password --admin");//playwright steps hold

}
register();
register();

function login(username:string,password:string)
{
console.log("username is--->"+username);
console.log("password is--->"+password);
}

function sum(x:number,y:number):number
{
   return x+y;
}



register();//calling function
login("Meghna","Pande");
login("Soham","Pande");
login("Karan","Pande");
console.log(sum(5,8));//13

var MyFirstname: string = verifyText("Meghna");

function verifyText(ActualText: string): string 
{
    // Return a verified text as string
    return "This is the returned text --->"+ActualText;
}
const result =verifyText("Meghna");
console.log(result);//