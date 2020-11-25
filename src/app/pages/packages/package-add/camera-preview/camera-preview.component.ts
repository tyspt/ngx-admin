import { Component, OnInit } from '@angular/core';
import { NbDialogRef } from '@nebular/theme';
import { WebcamImage } from 'ngx-webcam';
import { Subject } from 'rxjs';

@Component({
  selector: 'ngx-camera-preview',
  templateUrl: './camera-preview.component.html',
  styleUrls: ['./camera-preview.component.scss']
})
export class CameraPreviewComponent implements OnInit {

  webcamImage: WebcamImage;
  trigger: Subject<void> = new Subject<void>();
  loading = true;

  constructor(
    protected ref: NbDialogRef<CameraPreviewComponent>
  ) { }

  ngOnInit(): void {
    // Camera module doesn't fire any event when it's ready, so we just do an rough estimation on how long this
    // could take and display a loading symbol during the time to avoid total blank page
    setTimeout(() => this.loading = false, 2000);
  }

  takeSnapshot(): void {
    this.trigger.next();
  }

  discardSnapshot(): void {
    this.webcamImage = null;
  }

  handleImage(webcamImage: WebcamImage): void {
    this.webcamImage = webcamImage;
  }

  submit(): void {
    this.ref.close(this.webcamImage);
  }

  dismiss(): void {
    this.ref.close();
  }
}
