export interface Month {
    id: number,
    type: PackageType,
    barcode: string,
    building: string,
    recipient: string,
    timeReceived: Date,
    status: PackageStatus,
}

export enum PackageType {
    INBOUND = 'INBOUND',
    OUTBOUND = 'OUTBOUND'
}

export enum PackageStatus {
    ERFASST = 'ERFASST',
    SORTIERT = 'SORTIERT',
    IM_TRANSPORT = 'IM_TRANSPORT',
    GELIEFERT = 'GELIEFERT',
}