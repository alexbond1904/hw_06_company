import {Employee} from "../models/Employee";
import {Manager} from "../models/Manager";
import {WageEmployee} from "../models/WageEmployee";
import {SalesManager} from "../models/SalesManager";

export interface CompanyService {
    size(): number;

    addEmployee(employee: Manager|WageEmployee|SalesManager): boolean;

    removeEmployee(id: number): Employee | null;

    findEmployee(id: number): Employee | null;

    totalSalary(): number;

    averageSalary(): number;

    totalSales(): number;

    printEmployees(): void;

    findEmployeesHoursGreaterThan(hours: number): Employee[];

    findEmployeesSalaryBetween(min: number, max: number): Employee[];
}
