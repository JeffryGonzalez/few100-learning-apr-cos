export abstract class _Person {
    id: string;
    firstName: string;
    lastName: string;

}

export interface ProvidesInformation {
    getInfo: () => string;
}

export class Employee extends _Person implements ProvidesInformation {

    job: string;
    salary: number;
    workFromHomeDay: string;
    getInfo() {
        return `${this.firstName} ${this.lastName} makes ${this.salary}`;
    }
}
