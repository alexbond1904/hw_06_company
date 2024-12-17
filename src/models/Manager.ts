import { Employee } from "./Employee";

export class Manager extends Employee {
    private _baseSalary: number;
    private _grade: number;

    constructor(id: number, firstName: string, lastName: string, hours: number, baseSalary: number, grade: number) {
        super(id, firstName, lastName, hours);
        this._baseSalary = baseSalary;
        this._grade = grade;
    }

    public getBaseSalary(): number {
        return this._baseSalary;
    }

    public setBaseSalary(baseSalary: number): void {
        this._baseSalary = baseSalary;
    }

    get grade(): number {
        return this._grade;
    }

    set grade(value: number) {
        this._grade = value;
    }

    public getGrade(): number {
        return this._grade;
    }

    public setGrade(grade: number): void {
        this._grade = grade;
    }

    public calcSalary(): number {
        return this.checkMinSalary(this._baseSalary * this._grade);
    }

    public toString(): string {
        return super.toString() + `, baseSalary=${this._baseSalary}, grade=${this._grade}`;
    }
}
