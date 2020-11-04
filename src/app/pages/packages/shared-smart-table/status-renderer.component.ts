import { Component, Input, OnInit } from '@angular/core';
import { Status } from 'app/@core/data/package';
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
      case Status.GELIEFERT:
        return 'secondary';
      case Status.IM_TRANSPORT:
        return 'warning';
      case Status.SORTIERT:
      case Status.ERFASST:
      default:
        return 'success';
    }
  }

  ngOnInit(): void {
  }
}
