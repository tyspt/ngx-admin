import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NbDialogRef, NbToastrService } from '@nebular/theme';
import { Package } from 'app/@core/data/package';

@Component({
  selector: 'ngx-confirmation-popup',
  templateUrl: './confirmation-popup.component.html',
  styleUrls: ['./confirmation-popup.component.scss']
})
export class ConfirmationPopupComponent implements OnInit {

  @Input() packages: Package[];

  constructor(
    protected ref: NbDialogRef<ConfirmationPopupComponent>,
    private router: Router,
    private toastrService: NbToastrService,
  ) { }

  ngOnInit(): void {
  }

  confirmHandover() {
    // TODO: call handover bcakend API
    this.dismiss();
    this.toastrService.success('Packages status have been successfully updated.', `Handover success!`);
    this.router.navigate(['pages', 'packages', 'list']);
  }

  dismiss() {
    this.ref.close();
  }
}
