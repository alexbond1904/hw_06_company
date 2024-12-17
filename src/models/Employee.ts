export abstract class Employee {
    readonly _id: number;
    protected _firstName: string;
    protected _lastName: string;
    protected _hours: number;
    protected static _minWage: number = 32;

    protected constructor(id: number, firstName: string, lastName: string, hours: number) {
        this._id = id;
        this._firstName = firstName;
        this._lastName = lastName;
        this._hours = hours;
    }

    public abstract calcSalary(): number;

    public checkMinSalary(salary: number): number {
        if (salary < this.hours * Employee._minWage) {
            salary = this.hours * Employee._minWage;
        }
        return salary;
    }

    get id(): number {
        return this._id;
    }

    get lastName(): string {
        return this._lastName;
    }

    get hours(): number {
        return this._hours;
    }

    static get minWage(): number {
        return this._minWage;
    }

    get firstName(): string {
        return this._firstName;
    }

    set firstName(value: string) {
        this._firstName = value;
    }

    public toString(): string {
        return `Employee [id=${this._id}, firstName=${this._firstName}, lastName=${this._lastName}, hours=${this._hours}]`;
    }
}
