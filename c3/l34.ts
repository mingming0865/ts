// //l34
// class Employee {
//     private empCode: string;
//     private empName: string;

//     constructor(empCode: string, empName: string) {
//         this.empCode = empCode;
//         this.empName = empName;
//     }
//     //getter/setter
// }

// let emp = new Employee("aaa", "bbbb"); //immutable
// // emp.empCode = "123";
// // emp.empName = "Hoi Dan IT";

// console.log(">>> check emp: ", emp)

class Employee {
    protected empCode: number; // Từ private đổi thành protected
    public empName: string;

    constructor(code: number, name: string) {
        this.empCode = code;
        this.empName = name;
    }
}

class SalesEmployee extends Employee {
    private department: string;

    constructor(name: string, code: number, department: string) {
        super(code, name); // Thứ tự code và name đã đúng
        this.department = department;
    }

    public getEmployeeCode(): number {
        return this.empCode; // Có thể truy cập vì empCode là protected
    }
}

let emp = new SalesEmployee("John Smith", 123, "Sales");
console.log("Employee Code:", emp.getEmployeeCode()); // Không còn lỗi
