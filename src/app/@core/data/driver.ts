import { Observable } from 'rxjs';

export interface Driver {
    id: number;
    name: string;
    email: string;
    telephone: string;
    company: string;
    location: Location;
}

export interface Location {
    latitude: number;
    longitude: number;
    accuracy: number;
    lastUpdatedTimestamp: string;
}


export abstract class DriverData {
    abstract getData(): Observable<Driver[]>;
    abstract addDriver(newDriver: any): Observable<Driver>;
    abstract updateDriver(newDriver: any): Observable<Driver>;
    abstract deleteDriver(id: number): Observable<Driver>;
}
