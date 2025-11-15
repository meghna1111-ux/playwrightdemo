var emp = //  create variable of interface type
 {
    empName: "Vivek",
    empID: 101,
    empSal: 50000,
    dispData: function () {
        console.log(this.empName + "   " + this.empID + "   " + this.empSal);
    }
};
//  access infromation  variable 
console.log(emp.empName); // vivek
console.log(emp.empID); // 101
console.log(emp.empSal); //  50000
emp.dispData(); // print all the data in single line
