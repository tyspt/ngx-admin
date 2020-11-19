import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Package, PackageData, ShipmentCourse, Signature } from '../data/package';

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

    getSignatureBlobByIdOrBarcode(idOrBarcode: string): Observable<Signature> {
        return this.http.get<Signature>(`${this.endpoint}/${idOrBarcode}/signature`);
    }

    addPackage(newPkg: any): Observable<Package> {
        return this.http.post<Package>(this.endpoint, newPkg);
    }
}
