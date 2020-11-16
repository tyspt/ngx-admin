import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';

import { Building, BuildingData } from '../data/building';

@Injectable()
export class BuildingService implements BuildingData {

    endpoint = `${environment.apiHost}/buildings`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Building[]> {
        return this.http.get<Building[]>(this.endpoint);
    }

    addBuilding(newBuilding: any): Observable<Building> {
        delete newBuilding.id;
        return this.http.post<Building>(this.endpoint, newBuilding);
    }

    updateBuilding(newBuilding: Building): Observable<Building> {
        return this.http.put<Building>(`${this.endpoint}/${newBuilding.id}`, newBuilding);
    }

    deleteBuilding(id: number): Observable<Building> {
        return this.http.delete<Building>(`${this.endpoint}/${id}`);
    }
}
