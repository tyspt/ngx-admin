import { Observable } from 'rxjs';

export interface Building {
    id: number;
    shortName?: string;
    fullName?: string;
    description?: string;
    address?: string;
}

export abstract class BuildingData {
    abstract getData(): Observable<Building[]>;
    abstract addBuilding(newBuilding: any): Observable<Building>;
    abstract updateBuilding(newBuilding: Building): Observable<Building>;
    abstract deleteBuilding(id: number): Observable<Building>;
}
