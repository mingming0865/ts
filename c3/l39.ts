abstract class Employee39 {
    constructor(private firstName: string, private lastName: string) { }

    abstract getSalary(): number; // abstract method

    // normal method
    get fullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    compensationStatement(): string {
        return `${this.fullName} makes ${this.getSalary()} a month.`;
    }
}

// Lớp FullTimeEmployee
class FullTimeEmployee extends Employee39 {
    constructor(firstName: string, lastName: string, private salary: number) {
        super(firstName, lastName); // Gọi constructor của lớp cha
    }

    // Cần viết phương thức này, vì nó là abstract ở lớp cha
    getSalary(): number {
        return this.salary;
    }
}

// Lớp Contractor
class Contractor extends Employee39 {
    constructor(
        firstName: string,
        lastName: string,
        private rate: number,
        private hours: number
    ) {
        super(firstName, lastName); // Gọi constructor của lớp cha
    }

    // Cần viết phương thức này, vì nó là abstract ở lớp cha
    getSalary(): number {
        return this.rate * this.hours;
    }
}

// Tạo đối tượng FullTimeEmployee
const test1 = new FullTimeEmployee("Eric", "Hoi Dan IT", 1000);
console.log(">>> test 1 salary: ", test1.getSalary()); // 1000
console.log(test1.compensationStatement()); // Eric Hoi Dan IT makes 1000 a month.

// Tạo đối tượng Contractor
const test2 = new Contractor("John", "Doe", 50, 160); // 50 USD/giờ, 160 giờ
console.log(">>> test 2 salary: ", test2.getSalary()); // 8000
console.log(test2.compensationStatement()); // John Doe makes 8000 a month.
