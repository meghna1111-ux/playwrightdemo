class Person {
    name: string;

    constructor(name: string) {
        this.name = name;
    }
}

class Emp extends Person {
    empno: number;

    constructor(empno: number, name: string) {
        super(name); // calls Person's constructor
        this.empno = empno;
    }

    display(): void {
        console.log("Employee No:", this.empno);
        console.log("Name:", this.name); // inherited property
    }
}


// Example usage
const e1 = new Emp(101, "Meghna");
e1.display();
