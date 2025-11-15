// Define a class named Employeename
var Employeename1 = /** @class */ (function () {
    // Constructor to initialize values
    function Employeename1(eid, ename, deptno) {
        this.eid = eid;
        this.ename = ename;
        this.deptno = deptno;
    }
    // Method to reassign values after object creation
    Employeename1.prototype.setData = function (id, name, deptno) {
        this.eid = id;
        this.ename = name;
        this.deptno = deptno;
    };
    // Method to display employee details
    Employeename1.prototype.display = function () {
        console.log("Employee ID:", this.eid);
        console.log("Employee Name:", this.ename);
        console.log("Department No:", this.deptno);
    };
    return Employeename1;
}());
// Step 2: Create objects of class and call methods
// Object 1
var emp1 = new Employeename1(1, "Meghna", 111);
emp1.display();
// Update data using setData
emp1.setData(1, "Meghna Pande", 777);
emp1.display();
// Object 2
var emp2 = new Employeename1(2, "Ankur", 222);
emp2.display();
