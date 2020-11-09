import { Observable } from 'rxjs';
import { Building } from './building';

export interface Package {
    id: number;
    type: PackageType;
    barcode: string;
    recipient: Person;
    status: PackageStatus;
    orderNumber?: string;
    representative?: Person;
    sender?: Person;
    createdTimestamp?: string;
    lastUpdatedTimestamp?: string;
    // Following fields are optional and only used by smart table, no need to fill in data
    recipientName?: string;
    recipientBuilding?: string;
}

export interface Person {
    id?: number;
    name: string;
    email?: string;
    telephone?: string;
    building?: Building;
    fullAddress?: string;
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

    COLLECTED = 'COLLECTED',
    RECEIVED_BY_LOGISTIC_CENTER = 'RECEIVED_BY_LOGISTIC_CENTER',
}

export abstract class PackageData {
    abstract getData(): Observable<Package[]>;
    abstract getPackagebyIdOrBarcode(queryNumber: string): Observable<Package>;
    abstract addPackage(newPkg: any): Package;
}
