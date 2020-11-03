export interface Package {
    id: string;
    type: Type;
    barcode: string;
    orderNumber?: string;
    recipient: Person;
    representative?: Person;
    sender?: Person;
    timeCreated: string;
    status: Status;
    // Following fields are optional and only used by smart table, no need to fill in data
    recipientName?: string;
    recipientBuilding?: string;
}

export interface Person {
    name: string;
    email?: string;
    employeeId?: string;
    telephone?: string;
    building?: string;
    fullAddress?: string;
}

export enum Type {
    INBOUND = 'INBOUND',
    OUTBOUND = 'OUTBOUND',
}

export enum Status {
    ERFASST = 'ERFASST',
    SORTIERT = 'SORTIERT',
    IM_TRANSPORT = 'IM_TRANSPORT',
    GELIEFERT = 'GELIEFERT',
}

export abstract class PackageData {
    abstract getData(): Package[];
    abstract getPackagebyId(id: string): Package;
}
