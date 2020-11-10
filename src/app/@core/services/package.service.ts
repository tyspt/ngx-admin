import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Package, PackageData } from '../data/package';

@Injectable()
export class PackageService implements PackageData {

    endpoint = `${environment.apiHost}/packages`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Package[]> {
        return this.http.get<Package[]>(this.endpoint)
            .pipe(delay(environment.simulatedApiDelay));
    }

    getPackagebyIdOrBarcode(queryNumber: string): Observable<Package> {
        return this.http.get<Package>(`${this.endpoint}/${queryNumber}`)
            .pipe(delay(environment.simulatedApiDelay));
    }

    addPackage(newPkg: any): Observable<Package> {
        return this.http.post<Package>(this.endpoint, newPkg)
            .pipe(delay(environment.simulatedApiDelay));
    }
}
