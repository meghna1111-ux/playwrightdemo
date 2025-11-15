//named function
function register() {
    console.log("Register is done username --admin and password --admin"); //playwright steps hold
}
register();
register();
function login(username, password) {
    console.log("username is--->" + username);
    console.log("password is--->" + password);
}
function sum(x, y) {
    return x + y;
}
register(); //calling function
login("Meghna", "Pande");
login("Soham", "Pande");
login("Karan", "Pande");
console.log(sum(5, 8)); //13
var MyFirstname = verifyText("Meghna");
function verifyText(ActualText) {
    // Return a verified text as string
    return "This is the returned text --->" + ActualText;
}
var result = verifyText("Meghna");
console.log(result); //
