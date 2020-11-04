import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageHandoverComponent } from './package-handover.component';

describe('PackageHandoverComponent', () => {
  let component: PackageHandoverComponent;
  let fixture: ComponentFixture<PackageHandoverComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageHandoverComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageHandoverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
