import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageAddComponent } from './package-add.component';

describe('PackageAddComponent', () => {
  let component: PackageAddComponent;
  let fixture: ComponentFixture<PackageAddComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageAddComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
