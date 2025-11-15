//wap to print values from 1 to 10 

for(var i:number=1; i<=10; i++)// condition
{
    console.log("Values in increment order " +i);
}

console.log("--------------------------------------");

//wap to print values from 10 to 1 
//initialization or strt point
//condition or end point j>=1
//decrement order j--

for (var j: number = 10; j >= 1; j--) {
    console.log("Value in decrement order: " + j);
}



//wap to print table of any number

var table :number=5;
console.log("Table of ----->" +table);
for(var j:number=1; j<=10; j++)
{
 console.log(table+" * "+" j "+" = "+ table*j);
}



// WAP to print tables from 1 to 5
for (let i: number = 1; i <= 5; i++) {
    console.log(`\nMultiplication Table for ${i}`);
    for (let j: number = 1; j <= 10; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
}