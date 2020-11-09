import { Building } from './building';

export interface Package {
    id: string;
    type: PackageType;
    barcode: string;
    orderNumber?: string;
    recipient: Person;
    representative?: Person;
    sender?: Person;
    createdTimestamp?: string;
    lastUpdatedTimestamp?: string;
    status: PackageStatus;
    // Following fields are optional and only used by smart table, no need to fill in data
    recipientName?: string;
    recipientBuilding?: string;
}

export interface Person {
    name: string;
    email?: string;
    id?: string;
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
    abstract getData(): Package[];
    abstract getPackagebyId(id: string): Package;
    abstract getPackagebyBarcode(barcode: string): Package;
    abstract addPackage(newPkg: any): Package;
}
