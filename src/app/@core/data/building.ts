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
}
