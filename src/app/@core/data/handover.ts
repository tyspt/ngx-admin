import { Observable } from 'rxjs';
import { Package } from './package';

export interface Handover {
    uuid: string;
    packages: Package[];
    createdTimestamp: string;
    lastUpdatedTimestamp: string;
    completed: boolean;
}

export abstract class HandoverData {
    abstract findByUuid(uuid: string): Observable<Handover>;
    abstract addPackage(handoverUuid: string, pkgIdOrBarcode: string): Observable<Handover>;
    abstract rollback(uuid: string): Observable<Handover>;
    abstract confirm(uuid: string): Observable<Handover>;
}
