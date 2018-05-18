import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderCartListComponent } from './order-cart-list.component';

describe('OrderCartListComponent', () => {
  let component: OrderCartListComponent;
  let fixture: ComponentFixture<OrderCartListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderCartListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderCartListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
