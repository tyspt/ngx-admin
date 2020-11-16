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
}
