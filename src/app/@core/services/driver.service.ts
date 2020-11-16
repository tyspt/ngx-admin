import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Driver, DriverData } from '../data/driver';

@Injectable()
export class DriverService implements DriverData {

    endpoint = `${environment.apiHost}/drivers`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Driver[]> {
        return this.http.get<Driver[]>(this.endpoint);
    }

    addDriver(newDriver: any): Observable<Driver> {
        delete newDriver.id;
        return this.http.post<Driver>(this.endpoint, newDriver);
    }

    updateDriver(newDriver: any): Observable<Driver> {
        return this.http.put<Driver>(`${this.endpoint}/${newDriver.id}`, newDriver);
    }

    deleteDriver(id: number): Observable<Driver> {
        return this.http.delete<Driver>(`${this.endpoint}/${id}`);
    }
}
