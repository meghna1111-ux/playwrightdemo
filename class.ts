// Define a class named Employeename
class Employeename1 {
    eid: number;      // Employee ID
    ename: string;    // Employee Name
    deptno: number;   // Department Number

    // Constructor to initialize values
    constructor(eid: number, ename: string, deptno: number) {
        this.eid = eid;
        this.ename = ename;
        this.deptno = deptno;
    }

    // Method to reassign values after object creation
    setData(id: number, name: string, deptno: number): void {
        this.eid = id;
        this.ename = name;
        this.deptno = deptno;
    }

    // Method to display employee details
    display(): void {
        console.log("Employee ID:", this.eid);
        console.log("Employee Name:", this.ename);
        console.log("Department No:", this.deptno);
    }
}

// Step 2: Create objects of class and call methods

// Object 1
const emp1 = new Employeename1(1, "Meghna", 111);
emp1.display();

// Update data using setData
emp1.setData(1, "Meghna Pande", 777);
emp1.display();

// Object 2
var emp2 = new Employeename1(2, "Ankur", 222);
emp2.display();