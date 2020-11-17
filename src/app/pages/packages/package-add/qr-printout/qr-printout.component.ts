import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';

@Component({
  selector: 'ngx-packages-qr-printout',
  templateUrl: './qr-printout.component.html',
  styleUrls: ['./qr-printout.component.scss'],
})
export class QrPrintoutComponent implements OnInit {

  @Input() qrContent: string;

  constructor(protected ref: NbDialogRef<QrPrintoutComponent>) { }

  ngOnInit(): void {
  }

  dismiss() {
    this.ref.close();
  }

  openPrintWindow() {
    window.print();
  }
}
