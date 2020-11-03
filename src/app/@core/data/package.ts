export interface Package {
    id: number;
    type: Type;
    barcode: string;
    building?: string;
    recipient: string;
    fullAddress?: string;
    timeCreated: string;
    status: Status;
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
}
