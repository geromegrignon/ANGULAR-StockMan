import { TestBed, inject } from '@angular/core/testing';

import { OrderCartService } from './order-cart.service';

describe('OrderCartService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrderCartService]
    });
  });

  it('should be created', inject([OrderCartService], (service: OrderCartService) => {
    expect(service).toBeTruthy();
  }));
});
