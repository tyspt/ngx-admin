import { Component, Input, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { Package, PackageData, ShipmentCourse } from 'app/@core/data/package';

@Component({
  selector: 'ngx-package-detail',
  templateUrl: './package-detail.component.html',
  styleUrls: ['./package-detail.component.scss'],
})
export class PackageDetailComponent implements OnInit {

  @Input() package: Package;

  shipmentCourses: ShipmentCourse[];

  position: { lat: number, lng: number, radius: number };
  radius: number;

  icon: google.maps.Icon =
    { url: 'assets/icons/marker-icon.png', size: new google.maps.Size(48, 57), anchor: new google.maps.Point(24, 24) };
  mapOptions: google.maps.MapOptions = { mapTypeId: 'hybrid' };
  markerOptions: google.maps.MarkerOptions = { icon: this.icon };
  circleOptions: google.maps.CircleOptions = { fillColor: 'DodgerBlue', fillOpacity: 0.2, strokeOpacity: 0 };

  constructor(
    protected ref: NbDialogRef<PackageDetailComponent>,
    private PackageService: PackageData,
  ) { }

  ngOnInit(): void {
    // Setup position data, if not avaialbele, then use the default values
    this.position = {
      lat: this.package?.driver?.location?.latitude ? this.package.driver.location.latitude : 49.007090,
      lng: this.package?.driver?.location?.longitude ? this.package.driver.location.longitude : 12.142016,
      radius: this.package?.driver?.location?.accuracy ? this.package.driver.location.accuracy : 50,
    };

    // Retrieve shipment course data from server
    this.PackageService.getShipmentCoursesByIdOrBarcode(this.package.id.toString())
      .subscribe(shipmentCourses => this.shipmentCourses = shipmentCourses);
  }

  dismiss() {
    this.ref.close();
  }
}
