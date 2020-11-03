import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Package } from 'app/@core/data/package';

@Component({
  selector: 'ngx-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
})
export class PackageDetailComponent implements OnInit {

  @Input() package: Package;

  shipmentCourses = [{
    timestamp: 'Sa, 31.10.2020, 23:14',
    description: 'Der Empfänger hat die Sendung aus der PACKSTATION abgeholt.',
  },
  {
    timestamp: 'Sa, 31.10.2020, 09:35, Regensburg',
    description: 'Die Sendung liegt in der Packstation 119, Wernerwerkstr. 2b, 93049 Regensburg zur Abholung bereit.',
  },
  {
    timestamp: 'Sa, 31.10.2020, 08:15',
    description: 'Die Sendung befindet sich auf dem Weg zur Packstation.',
  },
  {
    timestamp: 'Sa, 31.10.2020, 08:15',
    description: 'Die Sendung wurde in das Zustellfahrzeug geladen. Die Zustellung erfolgt voraussichtlich heute.',
  },
  {
    timestamp: 'Sa, 31.10.2020, 03:51, Regensburg',
    description: 'Die Sendung ist in der Region des Empfängers angekommen und wird im nächsten Schritt zur Zustellbasis transportiert.',
  },
  {
    timestamp: 'Fr, 30.10.2020, 19:30, Speyer',
    description: 'Die Sendung wurde von DHL bearbeitet und wird für den Weitertransport in die Region des Empfängers vorbereitet.',
  }, {
    timestamp: 'Fr, 30.10.2020, 19:00',
    description: 'Die Sendung wurde elektronisch angekündigt. Sobald die Sendung von uns bearbeitet wurde, erhalten Sie weitere Informationen.',
  }];

  readonly position = { lat: 49.005739, lng: 12.145199 };

  constructor(protected ref: NbDialogRef<PackageDetailComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }
}
