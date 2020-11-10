import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';

import { Person, PersonData } from '../data/person';

@Injectable()
export class PersonService implements PersonData {

    endpoint = `${environment.apiHost}/persons`;

    constructor(
        private http: HttpClient,
    ) { }

    getData(): Observable<Person[]> {
        return this.http.get<Person[]>(this.endpoint)
            .pipe(delay(environment.simulatedApiDelay));
    }
}
