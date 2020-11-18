import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Handover, HandoverData, HandoverStatus } from 'app/@core/data/handover';
import { LocalDataSource } from 'ng2-smart-table';

@Component({
  selector: 'ngx-handover-list',
  templateUrl: './handover-list.component.html',
  styleUrls: ['./handover-list.component.scss'],
})
export class HandoverListComponent implements OnInit {

  handovers: Handover[];
  loading = true;

  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
    },
    columns: {
      uuid: {
        title: 'Handover UUID',
        type: 'string',
      },
      driverName: {
        title: 'Driver',
        type: 'string',
      },
      lastUpdatedTimestamp: {
        title: 'Last Updated',
        type: 'string',
      },
      status: {
        title: 'Status',
        type: 'string',
      },
    },
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private handoverService: HandoverData,
    private datePipe: DatePipe,
  ) {
    this.loading = true;
    this.handoverService.getData().subscribe(handovers => {
      handovers = handovers.filter(handover => handover.status === HandoverStatus.ON_GOING);
      handovers.forEach(handover => {
        handover.driverName = handover.driver.name;
        handover.lastUpdatedTimestamp = this.datePipe.transform(handover.lastUpdatedTimestamp, 'medium');
      });
      this.handovers = handovers;
      this.source.load(handovers);
      this.loading = false;
    });
  }

  ngOnInit(): void {
  }

  resumeHandover(handover: Handover): void {
    this.router.navigate([`./edit/${handover.uuid}`], { relativeTo: this.activatedRoute });
  }
}
