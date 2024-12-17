import {Router} from "express";
import {CompanyServiceImpl} from "../services/CompanyServiceImpl";
import {CompanyController} from "../controller/CompanyController";
import {Manager} from "../models/Manager";
import {SalesManager} from "../models/SalesManager";
import {WageEmployee} from "../models/WageEmployee";



const router = Router();

const a = new Manager(1,"A","A",50,5000,1.2);
const b = new SalesManager(2,"B","B",150,22100,10);
const c = new WageEmployee(3,"C","C",250,30);
const company = new CompanyServiceImpl();
company.addEmployee(a);
company.addEmployee(b);
company.addEmployee(c);
const controller = new CompanyController(company);

//http://localhost:3000/api/company/ + [allEmployee , employee]
router.get('/allEmployee',(req,res)=>controller.getAllEmployees(req,res));
router.post('/employee',(req,res)=> {controller.addEmployee(req,res)});
router.get('/employee',(req,res)=>controller.getEmployee(req,res));
router.delete('/employee',(req,res)=>controller.removeEmployee(req,res));
router.get('/averageSalary',(req,res)=>controller.getAverageSalary(req,res));
router.get('/totalSalary',(req,res)=>controller.getTotalSalary(req,res));
router.get('/findEmployeesWithHoursGreaterThan',(req,res)=>controller.findEmployeesWithHoursGreaterThan(req,res));
router.get('/findEmployeesWithSalaryBetween',(req,res)=>controller.findEmployeesWithSalaryBetween(req,res));

export default router;
