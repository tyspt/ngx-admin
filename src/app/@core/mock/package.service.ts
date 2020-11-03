import { Injectable } from '@angular/core';

import { Package, PackageData, Status, Type } from '../data/package';

@Injectable()
export class PackageService extends PackageData {
  data: Package[] = [
    {
      id: '1',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'F31',
        fullAddress: 'Siemensstraße 12 Geb. F31/3/2, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.GELIEFERT,
      type: Type.INBOUND,
    },
    {
      id: '2',
      barcode: '172471974917192137391',
      recipient: {
        name: 'MICHAEL NOEL',
        email: 'michael.noel@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'KEVIN MATTHEWS',
        email: 'kevin.matthews@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'BETTIE JONES'
      },
      status: Status.IM_TRANSPORT,
      type: Type.INBOUND,
    },
    {
      id: '3',
      barcode: '1378979849812083132213',
      recipient: {
        name: 'EMMETT TILL',
        email: 'emmett.till@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'MEDGAR EVERS',
        email: 'medgar.evers@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'GEORGE JUNIUS STINNEY'
      },
      status: Status.SORTIERT,
      type: Type.INBOUND,
    },
    {
      id: '4',
      barcode: '17923791027490173409217',
      recipient: {
        name: 'MARTIN LUTHER KING',
        email: 'martin.luther.king@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'HENRY SMITH',
        email: 'henry.smith@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'JOHN CRAWFORD'
      },
      status: Status.SORTIERT,
      type: Type.INBOUND,
    },
    {
      id: '5',
      barcode: '12758917571975901757232',
      recipient: {
        name: 'MICHAEL BROWN',
        email: 'michael.brown@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'EZELL FORD',
        email: 'ezell.ford@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'DANTE PARKER'
      },
      status: Status.GELIEFERT,
      type: Type.INBOUND,
    },
    {
      id: '6',
      barcode: '47976890682082067602863',
      recipient: {
        name: 'QUINTONIO LEGRIER',
        email: 'QUINTONIO.LEGRIER@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'KEITH CHILDRESS',
        email: 'KEITH.CHILDRESS @continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'JANET WILSON'
      },
      status: Status.IM_TRANSPORT,
      type: Type.INBOUND,
    },
    {
      id: '7',
      barcode: '37957985018083724975948',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.IM_TRANSPORT,
      type: Type.INBOUND,
    },
    {
      id: '8',
      barcode: '94897582683648274832172',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.GELIEFERT,
      type: Type.INBOUND,
    },
    {
      id: '9',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.GELIEFERT,
      type: Type.INBOUND,
    },
    {
      id: '10',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.SORTIERT,
      type: Type.INBOUND,
    },
    {
      id: '11',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.SORTIERT,
      type: Type.INBOUND,
    },
    {
      id: '12',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.IM_TRANSPORT,
      type: Type.INBOUND,
    },
    {
      id: '13',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '14',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '15',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '16',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '17',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '18',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '19',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '20',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '21',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '22',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '23',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '24',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '25',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '26',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '27',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
    {
      id: '28',
      barcode: '4621642642641264124261',
      recipient: {
        name: 'John Doe',
        email: 'john.doe@continental.com',
        telephone: '123-4567890',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/7, Regensburg',
      },
      timeCreated: '2020-10-30 12:42:35',
      representative: {
        name: 'Anna Musterfrau',
        email: 'anna.musterfrau@continental.com',
        telephone: '987-6543210',
        building: 'D42',
        fullAddress: 'Siemensstraße 12 Geb. D42/4/8, Regensburg',
      },
      sender: {
        name: 'Max Mustermann'
      },
      status: Status.ERFASST,
      type: Type.INBOUND,
    },
  ];

  getData() {
    return this.data;
  }

  getPackagebyId(id: string) {
    return this.data.find(p => p.id === id);
  }
}
