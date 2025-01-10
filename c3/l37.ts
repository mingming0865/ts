//inherritance
class Person3 {
    private firstName: string;
    private lastName: string;

    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName(): string {
        return `${this.firstName} ${this.lastName}`;
    }

    describe(): string {
        return `This is ${this.firstName} ${this.lastName}.`;
    }
}

// Lớp `Employee1` kế thừa `Person3`
class Employee1 extends Person3 {
    private jobTitle: string;

    constructor(firstName: string, lastName: string, jobTitle: string) {
        // Gọi constructor của lớp cha `Person3`
        super(firstName, lastName);
        this.jobTitle = jobTitle;
    }

    describe(): string {
        return `${super.describe()} They work as a ${this.jobTitle}.`;
    }
}

// Tạo đối tượng `Employee1`
let employee = new Employee1('Hoi Dan IT', 'Eric', 'Web Developer');

// Gọi các phương thức từ lớp cha và lớp con
console.log(employee.getFullName()); // Hoi Dan IT Eric
console.log(employee.describe());    // This is Hoi Dan IT Eric. They work as a Web Developer.
