import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Package, PackageData, ShipmentCourse } from '../data/package';

@Injectable()
export class PackageService implements PackageData {

    endpoint = `${environment.apiHost}/packages`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Package[]> {
        return this.http.get<Package[]>(this.endpoint);
    }

    getPackageByIdOrBarcode(idOrBarcode: string): Observable<Package> {
        return this.http.get<Package>(`${this.endpoint}/${idOrBarcode}`);
    }

    getShipmentCoursesByIdOrBarcode(idOrBarcode: string): Observable<ShipmentCourse[]> {
        return this.http.get<ShipmentCourse[]>(`${this.endpoint}/${idOrBarcode}/shipmentCourses`);
    }

    getSignatureByIdOrBarcode(idOrBarcode: string): Observable<string> {
        return this.http.get(`${this.endpoint}/${idOrBarcode}/signature`, { responseType: 'text' });
    }

    addPackage(newPkg: any): Observable<Package> {
        return this.http.post<Package>(this.endpoint, newPkg);
    }
}
