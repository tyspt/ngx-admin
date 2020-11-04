import { Component, Input, OnInit } from '@angular/core';
import { ViewCell } from 'ng2-smart-table';

@Component({
  selector: 'ngx-status-renderer',
  template: `
    <span class="badge badge-success">{{ value }}</span>
  `,
})
export class StatusRendererComponent implements ViewCell, OnInit {

  constructor() { }

  @Input() value: string | number;
  @Input() rowData: any;

  ngOnInit(): void {
  }
}
