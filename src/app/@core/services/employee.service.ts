import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Employee, EmployeeData } from '../data/employee';

@Injectable()
export class EmployeeService implements EmployeeData {

    endpoint = `${environment.apiHost}/employees`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Employee[]> {
        return this.http.get<Employee[]>(this.endpoint);
    }

    addEmployee(newEmployee: Employee): Observable<Employee> {
        delete newEmployee.id;
        newEmployee = this.processFields(newEmployee);
        return this.http.post<Employee>(this.endpoint, newEmployee);
    }

    updateEmployee(newEmployee: Employee): Observable<Employee> {
        newEmployee = this.processFields(newEmployee);
        return this.http.put<Employee>(`${this.endpoint}/${newEmployee.id}`, newEmployee);
    }

    deleteEmployee(id: number): Observable<Employee> {
        return this.http.delete<Employee>(`${this.endpoint}/${id}`);
    }


    private processFields(employee: Employee): Employee {
        delete employee.representativeName;
        delete employee.buildingCode;
        if (!employee.representative) {
            delete employee.representative;
        }
        return employee;
    }
}
