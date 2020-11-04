import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QrPrintoutComponent } from './qr-printout.component';

describe('QrPrintoutComponent', () => {
  let component: QrPrintoutComponent;
  let fixture: ComponentFixture<QrPrintoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QrPrintoutComponent]
    })
      .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QrPrintoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
