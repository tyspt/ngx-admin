import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Handover, HandoverData } from '../data/handover';

@Injectable()
export class HandoverService implements HandoverData {

    endpoint = `${environment.apiHost}/handovers`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Handover[]> {
        return this.http.get<Handover[]>(`${this.endpoint}`);
    }

    findByUuid(uuid: string): Observable<Handover> {
        return this.http.get<Handover>(`${this.endpoint}/${uuid}`);
    }

    addPackage(handoverUuid: string, pkgIdOrBarcode: string): Observable<Handover> {
        return this.http.put<Handover>(`${this.endpoint}/${handoverUuid}/packages/${pkgIdOrBarcode}`, {});
    }

    rollback(uuid: string): Observable<Handover> {
        return this.http.put<Handover>(`${this.endpoint}/${uuid}/rollback`, {});
    }

    confirm(uuid: string): Observable<Handover> {
        return this.http.put<Handover>(`${this.endpoint}/${uuid}/confirm`, {});
    }
}
