import { Observable } from 'rxjs';

import { Building } from './building';

export interface Person {
    id?: number;
    name: string;
    email?: string;
    telephone?: string;
    building?: Building;
    fullAddress?: string;
}

export abstract class PersonData {
    abstract getData(): Observable<Person[]>;
}
