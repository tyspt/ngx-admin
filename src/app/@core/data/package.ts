import { Observable } from 'rxjs';

import { Driver } from './driver';
import { Employee } from './employee';

export interface Package {
    id: number;
    type: PackageType;
    barcode: string;
    recipient: Employee;
    status: PackageStatus;
    orderNumber?: string;
    representative?: Employee;
    sender?: Employee;
    createdTimestamp?: string;
    lastUpdatedTimestamp?: string;
    driver?: Driver;
    // Following fields are optional and only used by smart table, no need to fill in data
    recipientName?: string;
    recipientBuilding?: string;
    senderName?: string;
}

export enum PackageType {
    INBOUND = 'INBOUND',
    OUTBOUND = 'OUTBOUND',
}

export enum PackageStatus {
    CREATED = 'CREATED',
    IN_HANDOVER = 'IN_HANDOVER',
    IN_TRANSPORT = 'IN_TRANSPORT',
    DELIVERED = 'DELIVERED',

    REATTEMPT_DELIVERY = 'REATTEMPT_DELIVERY',
    NOT_DELIVERABLE = 'NOT_DELIVERABLE',

    RECEIVED_BY_LC = 'RECEIVED_BY_LC',
}

export abstract class PackageData {
    abstract getData(): Observable<Package[]>;
    abstract getPackageByIdOrBarcode(queryNumber: string): Observable<Package>;
    abstract addPackage(newPkg: any): Observable<Package>;
}
