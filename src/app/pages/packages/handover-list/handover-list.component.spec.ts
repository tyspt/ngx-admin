import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HandoverListComponent } from './handover-list.component';

describe('HandoverListComponent', () => {
  let component: HandoverListComponent;
  let fixture: ComponentFixture<HandoverListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HandoverListComponent ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HandoverListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
