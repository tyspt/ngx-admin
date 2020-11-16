import { Observable } from 'rxjs';

import { Building } from './building';

export interface Employee {
    id?: number;
    name: string;
    email?: string;
    telephone?: string;
    building?: Building;
    fullAddress?: string;
    representative?: Employee;

    // Following fields are optional and only used by smart table, no need to fill in data
    buildingCode?: string;
    representativeName?: string;
}

export abstract class EmployeeData {
    abstract getData(): Observable<Employee[]>;
    abstract addEmployee(newEmployee: Employee): Observable<Employee>;
    abstract updateEmployee(newEmployee: Employee): Observable<Employee>;
    abstract deleteEmployee(id: number): Observable<Employee>;
}
