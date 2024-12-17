import {Employee} from "./Employee";

export class SalesManager extends Employee {
    private salesValue: number;
    private percent: number;

    constructor(id: number, firstName: string, lastName: string, hours: number, salesValue: number, percent: number) {
        super(id, firstName, lastName, hours);
        this.salesValue = salesValue;
        this.percent = percent;
    }

    public getSalesValue(): number {
        return this.salesValue;
    }

    public setSalesValue(salesValue: number): void {
        this.salesValue = salesValue;
    }

    public getPercent(): number {
        return this.percent;
    }

    public setPercent(percent: number): void {
        this.percent = percent;
    }

    public calcSalary(): number {
        return this.checkMinSalary(this.salesValue * this.percent);
    }
}
