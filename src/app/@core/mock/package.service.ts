import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Package, PackageData, PackageStatus, PackageType } from '../data/package';

@Injectable()
export class PackageService implements PackageData {
  data: Package[] = [
    {
      id: 1,
      barcode: '1937917519711295139517',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 1,
          shortName: 'F31',
        },
        fullAddress: 'Siemensstraße 12 Geb. F31/3/2, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.DELIVERED,
      type: PackageType.INBOUND,
    },
    {
      id: 2,
      barcode: '1724719749171921373931',
      recipient: {
        name: 'MICHAEL NOEL',
        email: 'michael.noel@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'KEVIN MATTHEWS',
        email: 'kevin.matthews@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'BETTIE JONES',
      },
      status: PackageStatus.IN_TRANSPORT,
      type: PackageType.INBOUND,
    },
    {
      id: 3,
      barcode: '1378979849812083132213',
      recipient: {
        name: 'EMMETT TILL',
        email: 'emmett.till@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'MEDGAR EVERS',
        email: 'medgar.evers@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'GEORGE JUNIUS STINNEY',
      },
      status: PackageStatus.IN_HANDOVER,
      type: PackageType.INBOUND,
    },
    {
      id: 4,
      barcode: '1792379102749017340917',
      recipient: {
        name: 'MARTIN LUTHER KING',
        email: 'martin.luther.king@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'HENRY SMITH',
        email: 'henry.smith@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'JOHN CRAWFORD',
      },
      status: PackageStatus.IN_HANDOVER,
      type: PackageType.INBOUND,
    },
    {
      id: 5,
      barcode: '1275891757197590177232',
      recipient: {
        name: 'MICHAEL BROWN',
        email: 'michael.brown@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'EZELL FORD',
        email: 'ezell.ford@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'DANTE PARKER',
      },
      status: PackageStatus.DELIVERED,
      type: PackageType.INBOUND,
    },
    {
      id: 6,
      barcode: '4797689068208207602863',
      recipient: {
        name: 'QUINTONIO LEGRIER',
        email: 'QUINTONIO.LEGRIER@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'KEITH CHILDRESS',
        email: 'KEITH.CHILDRESS @continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'JANET WILSON',
      },
      status: PackageStatus.IN_TRANSPORT,
      type: PackageType.INBOUND,
    },
    {
      id: 7,
      barcode: '3795798501808372975948',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.IN_TRANSPORT,
      type: PackageType.INBOUND,
    },
    {
      id: 8,
      barcode: '9489758268364824832172',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.DELIVERED,
      type: PackageType.INBOUND,
    },
    {
      id: 9,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.DELIVERED,
      type: PackageType.INBOUND,
    },
    {
      id: 10,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.IN_HANDOVER,
      type: PackageType.INBOUND,
    },
    {
      id: 11,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.IN_HANDOVER,
      type: PackageType.INBOUND,
    },
    {
      id: 12,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.IN_TRANSPORT,
      type: PackageType.INBOUND,
    },
    {
      id: 13,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.NOT_DELIVERABLE,
      type: PackageType.INBOUND,
    },
    {
      id: 14,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.REATTEMPT_DELIVERY,
      type: PackageType.INBOUND,
    },
    {
      id: 15,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.RECEIVED_BY_LOGISTIC_CENTER,
      type: PackageType.INBOUND,
    },
    {
      id: 16,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 17,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 18,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 19,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 20,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 21,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 22,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 23,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 24,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
    {
      id: 25,
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      createdTimestamp: '2020-10-30 12:42:35',
      lastUpdatedTimestamp: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: {
          id: 2,
          shortName: 'D42',
        },
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann',
      },
      status: PackageStatus.CREATED,
      type: PackageType.INBOUND,
    },
  ];

  getData() {
    return of(this.data);
  }

  getPackageByIdOrBarcode(queryNumber: string) {
    return of(this.data.find(p =>
      p.id === +queryNumber || p.barcode === queryNumber));
  }

  addPackage(newPkg: any): Observable<Package> {
    newPkg.id = Math.round(Math.random() * 99999999 + 1000000).toString();
    this.data.push(newPkg);
    return of(newPkg);
  }
}
