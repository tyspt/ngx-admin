import { Component, Input, OnInit } from '@angular/core';
import { PackageStatus } from 'app/@core/data/package';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-status-renderer',
  template: `
    <span class="badge badge-{{colorClass}}">{{ value }}</span>
  `,
})
export class StatusRendererComponent implements ViewCell, OnInit {

  constructor() { }

  @Input() value: string | number;
  @Input() rowData: any;

  get colorClass() {
    switch (this.value) {
      case PackageStatus.DELIVERED:
        return 'secondary';
      case PackageStatus.IN_TRANSPORT:
        return 'warning';
      case PackageStatus.IN_HANDOVER:
      case PackageStatus.CREATED:
      default:
        return 'success';
    }
  }

  ngOnInit(): void {
  }
}
