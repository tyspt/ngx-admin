import { Component, Input, OnInit } from '@angular/core';
import { PackageStatus } from 'app/@core/data/package';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-status-renderer',
  styleUrls: ['./status-renderer.component.scss'],
  template: `
    <span class="badge {{colorClass}}">{{ value }}</span>
  `,
})
export class StatusRendererComponent implements ViewCell, OnInit {

  constructor() { }

  @Input() value: string | number;
  @Input() rowData: any;

  get colorClass() {
    switch (this.value) {
      case PackageStatus.CREATED:
        return 'created';
      case PackageStatus.IN_HANDOVER:
        return 'in_handover';
      case PackageStatus.IN_TRANSPORT:
        return 'in_transport';
      case PackageStatus.DELIVERED:
        return 'delivered';
      case PackageStatus.REATTEMPT_DELIVERY:
        return 'reattempt_delivery';
      case PackageStatus.NOT_DELIVERABLE:
        return 'not_deliverable';
      case PackageStatus.COLLECTED:
        return 'collected';
      case PackageStatus.RECEIVED_BY_LOGISTIC_CENTER:
        return 'received_by_logistic_center';
    }
  }

  ngOnInit(): void {
  }
}
