import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { HandoverData } from 'app/@core/data/handover';
import { Package } from 'app/@core/data/package';
import { ExportToCsv } from 'export-to-csv';

@Component({
  selector: 'ngx-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss'],
})
export class ConfirmationPopupComponent implements OnInit {

  @Input() packages: Package[];
  @Input() uuid: string;

  loading = false;
  timestamp = new Date();

  constructor(
    private location: Location,
    protected ref: NbDialogRef<ConfirmationPopupComponent>,
    private toastrService: NbToastrService,
    private handoverService: HandoverData,
  ) { }

  ngOnInit(): void {
  }

  confirm() {
    this.loading = true;
    this.handoverService.confirm(this.uuid).subscribe(_ => {
      this.toastrService.success('Packages status have been successfully updated.', `Handover Successffuly Confirmed`);
      this.dismiss();
    });
  }

  rollback() {
    this.loading = true;
    this.handoverService.rollback(this.uuid).subscribe(_ => {
      this.toastrService.success('Packages status have reverted to their original state.', `Rollback Done`);
      this.dismiss();
    });
  }

  dismiss() {
    this.ref.close();
    this.location.back();
  }

  openPrintWindow() {
    window.print();
  }

  generateCSV() {
    const options = {
      filename: 'pacakge-handover-list-' + this.timestamp.toUTCString(),
      showLabels: true,
      showTitle: true,
      title: 'Pacakge Handover List on ' + this.timestamp,
      useKeysAsHeaders: true,
    };

    const data = this.packages.forEach(pkg => {
      pkg.recipientName = pkg?.recipient?.name;
      pkg.recipientBuilding = pkg?.recipient?.building?.shortName;
      pkg.senderName = pkg?.sender?.name;
      delete pkg.recipient;
      delete pkg.sender;
      delete pkg.representative;
    })

    const csvExporter = new ExportToCsv(options);
    csvExporter.generateCsv(this.packages);
  }
}
