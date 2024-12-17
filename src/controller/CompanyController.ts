import {Request, Response} from "express";
import {WageEmployee} from "../models/WageEmployee";
import {SalesManager} from "../models/SalesManager";
import {Manager} from "../models/Manager";
import {CompanyServiceImpl} from "../services/CompanyServiceImpl";


export class CompanyController {
    companyService: CompanyServiceImpl;

    constructor(companyService: CompanyServiceImpl) {
        this.companyService = companyService;
    }

    getAllEmployees(req: Request, res: Response) {
        res.status(200).json(this.companyService);
    }

    addEmployee(req: Request, res: Response) {
        const body = req.body;
        let isSuccess: boolean = false;
        if(body.wage) {
            const wageEmployee = new WageEmployee(body?.id,body?.firstName,body?.lastName,body?.hours,body?.wage);
            isSuccess = this.companyService.addEmployee(wageEmployee);
        }
        if(body.baseSalary && body.grade) {
            const manager = new Manager(body.id,body.firstName,body.lastName,body.hours,body?.baseSalary, body?.grade);
            isSuccess = this.companyService.addEmployee(manager);
        }
        if(body.salesValue && body.percent) {
            const salesManager = new SalesManager(body?.id,body?.firstName,body?.lastName,body?.hours,body?.salesValue, body?.percent);
            isSuccess = this.companyService.addEmployee(salesManager);
        }
        if (isSuccess) {
            res.status(200).send('Employee added');
        } else {
            res.status(409).send('Employee already exists or invalid data');
        }
    }



    getEmployee(req: Request, res: Response) {
        const id: number = +req.body.id;
        const employee = this.companyService.findEmployee(id);
        res.status(200).json(employee);
    }

    removeEmployee(req: Request, res: Response) {
        const id: number = +req.body.id;
        const employee = this.companyService.removeEmployee(id);
        res.status(200).json(employee);
    }

    getTotalSalary(req: Request, res: Response) {
        const totalSalary = this.companyService.totalSalary();
        res.status(200).json({totalSalary});
    }

    getAverageSalary(req: Request, res: Response) {
        const averageSalary = this.companyService.averageSalary();
        res.status(200).json({averageSalary});
    }

    getTotalSales(req: Request, res: Response) {
        const totalSales = this.companyService.totalSales();
        res.status(200).json({totalSales});
    }

    findEmployeesWithHoursGreaterThan(req: Request, res: Response) {
        const hours: number = parseInt(req.body.hours);
        const employees = this.companyService.findEmployeesHoursGreaterThan(hours);
        res.status(200).json(employees);
    }

    findEmployeesWithSalaryBetween(req: Request, res: Response) {
        const {min, max} = req.body;
        const employees = this.companyService.findEmployeesSalaryBetween(parseInt(min), parseInt(max));
        res.status(200).json(employees);
    }
}
