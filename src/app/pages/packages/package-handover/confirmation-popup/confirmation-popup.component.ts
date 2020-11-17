import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { HandoverData } from 'app/@core/data/handover';
import { Package } from 'app/@core/data/package';

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
}
