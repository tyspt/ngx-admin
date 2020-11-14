import { Observable } from 'rxjs';

import { Building } from './building';

export interface Person {
    id?: number;
    name: string;
    email?: string;
    telephone?: string;
    building?: Building;
    fullAddress?: string;
    representative?: Person;

    // Following fields are optional and only used by smart table, no need to fill in data
    buildingCode?: string;
    representativeName?: string;
}

export abstract class PersonData {
    abstract getData(): Observable<Person[]>;
}
