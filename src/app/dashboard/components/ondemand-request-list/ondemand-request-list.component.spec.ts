import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OndemandRequestListComponent } from './ondemand-request-list.component';

describe('OndemandRequestListComponent', () => {
  let component: OndemandRequestListComponent;
  let fixture: ComponentFixture<OndemandRequestListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OndemandRequestListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OndemandRequestListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
