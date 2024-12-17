import {Employee} from "./Employee";

export class WageEmployee extends Employee {
    private wage: number;

    constructor(id: number, firstName: string, lastName: string, hours: number, wage: number) {
        super(id, firstName, lastName, hours);
        this.wage = wage;
    }

    public getWage(): number {
        return this.wage;
    }

    public setWage(wage: number): void {
        this.wage = wage;
    }

    public calcSalary(): number {
        return this.checkMinSalary(this.hours * this.wage);
    }
}
