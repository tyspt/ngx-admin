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
}
