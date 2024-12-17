import {CompanyService} from "./CompanyService";
import e from "express";
import {Employee} from "../models/Employee";
import {SalesManager} from "../models/SalesManager";
import {Manager} from "../models/Manager";
import {WageEmployee} from "../models/WageEmployee";
import {type} from "node:os";

export class CompanyServiceImpl implements CompanyService {
     employees: Employee[];

    constructor() {
        this.employees = [];
    }


    public addEmployee(employee: Manager|SalesManager|WageEmployee): boolean {
        if (!employee || !employee.id || !employee.firstName || !employee.lastName
            || !employee.hours || this.findEmployee(employee.id)) {
            return false;
        }
        console.log(Object.getPrototypeOf(employee).constructor.name);
        this.employees.push(employee);
        return true;
    }


    public removeEmployee(id: number): Employee | null {
        const index = this.employees.findIndex(e => e.id === id);
        return this.employees.splice(index, 1)[0] || null;

    }

    public findEmployee(id: number): Employee | null {
        return this.employees.find(e => e.id === id) || null;
    }

    public totalSalary(): number {
        let sum = 0;
        for (let i = 0; i < this.employees.length; i++) {
            sum += this.employees[i].calcSalary();
        }
        return sum;
    }

    public averageSalary(): number {
        return this.totalSalary() / this.employees.length;
    }

    public totalSales(): number {
        let sum = 0;
        for (let i = 0; i < this.employees.length; i++) {
            if (this.employees[i] instanceof SalesManager) {
                sum += (this.employees[i] as SalesManager).getSalesValue();
            }
        }
        return sum;
    }

    public size() {
        return this.employees.length;
    }

    public printEmployees(): void {
        for (let i = 0; i < this.employees.length; i++) {
            console.log(this.employees[i]);
        }
    }

    public findEmployeesHoursGreaterThan(hours: number): Employee[] {
        return this.employees.filter(e => e.hours >= hours);
    }

    public findEmployeesSalaryBetween(min: number, max: number): Employee[] {
        return this.employees.filter(e => e.calcSalary() >= min && e.calcSalary() < max);
    }


}
