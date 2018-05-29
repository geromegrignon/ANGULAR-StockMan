import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderSupplyListComponent } from './provider-supply-list.component';

describe('ProviderSupplyListComponent', () => {
  let component: ProviderSupplyListComponent;
  let fixture: ComponentFixture<ProviderSupplyListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderSupplyListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderSupplyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
