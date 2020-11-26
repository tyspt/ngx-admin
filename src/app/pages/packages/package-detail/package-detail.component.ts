import { Component, Input, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { NbDialogRef, NbDialogService } from '@nebular/theme';
import { Package, PackageData, PackageStatus, ShipmentCourse } from 'app/@core/data/package';

import { QrPrintoutComponent } from '../qr-printout/qr-printout.component';

@Component({
  selector: 'ngx-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
})
export class PackageDetailComponent implements OnInit {

  @Input() package: Package;

  shipmentCourses: ShipmentCourse[];
  signatureUrl: any;
  delivered: boolean;
  displaySignature: boolean;

  // Settings for displaying the package position on Google Maps
  position: { lat: number, lng: number, radius: number };
  radius: number;

  icon: google.maps.Icon =
    { url: 'assets/icons/marker-icon.png', size: new google.maps.Size(48, 57), anchor: new google.maps.Point(24, 24) };
  mapOptions: google.maps.MapOptions = { mapTypeId: 'hybrid' };
  markerOptions: google.maps.MarkerOptions = { icon: this.icon };
  circleOptions: google.maps.CircleOptions = { fillColor: 'DodgerBlue', fillOpacity: 0.2, strokeOpacity: 0 };

  constructor(
    protected ref: NbDialogRef<PackageDetailComponent>,
    private dialogService: NbDialogService,
    private PackageService: PackageData,
    private sanitizer: DomSanitizer,
  ) { }

  ngOnInit(): void {
    this.delivered = (this.package.status === PackageStatus.DELIVERED);

    // Setup position data, use the default values if not avaialbele
    this.position = {
      lat: this.package?.driver?.location?.latitude ? this.package.driver.location.latitude : 49.007090,
      lng: this.package?.driver?.location?.longitude ? this.package.driver.location.longitude : 12.142016,
      radius: this.package?.driver?.location?.accuracy ? this.package.driver.location.accuracy : 50,
    };

    // Retrieve shipment course data from server
    this.PackageService.getShipmentCoursesByIdOrBarcode(this.package.id.toString())
      .subscribe(shipmentCourses => this.shipmentCourses = shipmentCourses);
  }

  toggleSignatureDisplay() {
    this.displaySignature = !this.displaySignature;
    if (!this.signatureUrl) {
      this.PackageService.getSignatureByIdOrBarcode(this.package.id.toString())
        .subscribe((base64Img: string) =>
          this.signatureUrl = this.sanitizer.bypassSecurityTrustUrl('data:image/jpg;base64,' + base64Img));
    }
  }

  showQRPopup(): void {
    this.dialogService.open(QrPrintoutComponent, {
      context: {
        qrContent: this.package.id.toString(),
        title: 'QR Code Printout',
      }, autoFocus: false,
    });
  }

  dismiss(): void {
    this.ref.close();
  }
}
