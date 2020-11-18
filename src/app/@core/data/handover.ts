import { Observable } from 'rxjs';

import { Driver } from './driver';
import { Package } from './package';

export interface Handover {
    uuid: string;
    packages: Package[];
    createdTimestamp: string;
    lastUpdatedTimestamp: string;
    status: HandoverStatus;
    driver: Driver;
    // Following fields are optional and only used by smart table, no need to fill in data
    driverName?: string;
}

export enum HandoverStatus {
    ON_GOING = 'ON_GOING',
    CANCELED = 'CANCELED',
    COMPLETED = 'COMPLETED',
}

export abstract class HandoverData {
    abstract getData(): Observable<Handover[]>;
    abstract findByUuid(uuid: string): Observable<Handover>;
    abstract addPackage(handoverUuid: string, pkgIdOrBarcode: string): Observable<Handover>;
    abstract rollback(uuid: string): Observable<Handover>;
    abstract confirm(uuid: string): Observable<Handover>;
}
