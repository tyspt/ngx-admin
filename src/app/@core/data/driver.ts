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
}
