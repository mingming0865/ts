//lesson 41

interface IEmployee {
    empCode: number;
    name: string;
    getSalary: (empCode1: number) => number;
}

class Eric implements IEmployee {
    public empCode: number;
    public name: string;

    getSalary = (code: number): number => {
        return 100 * code;
    }

    getName = () => {
        return 'hoi dan it'
    }
}

//lesson 40
interface IPerson {
    readonly firstName: string;
    lastName?: string;
    address: string
}

type Person41 = {
    firstName: string;
    lastName: string
}

function getFullName(person: IPerson) {
    return `${person.firstName} ${person.lastName}`;
}

let person40 = {
    firstName: 'Eric',
    lastName: 'Hoi Dan IT',
    address: 'Ha noi'
};

console.log(getFullName(person40)); // Eric Hoi Dan IT
