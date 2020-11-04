import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SharedSmartTableComponent } from './shared-smart-table.component';

describe('SharedSmartTableComponent', () => {
  let component: SharedSmartTableComponent;
  let fixture: ComponentFixture<SharedSmartTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SharedSmartTableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedSmartTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
