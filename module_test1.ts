//modules


export var  mystr:string="Meghna";
//simple functions

export function myfunc():void
{
console.log("This is my function");
}

export class myclass
{
    a:number;
    b:number;

    constructor(a:number,b:number)
    {
        this.a=a;
        this.b=b;
    }

    add=()=>
    {
        return(this.a+this.b);
    }
}