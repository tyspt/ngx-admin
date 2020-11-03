import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PackageListItemComponent } from './package-list-item.component';

describe('PackageListItemComponent', () => {
  let component: PackageListItemComponent;
  let fixture: ComponentFixture<PackageListItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PackageListItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PackageListItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
