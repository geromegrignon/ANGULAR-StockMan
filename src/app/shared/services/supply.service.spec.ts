import { TestBed, inject } from '@angular/core/testing';

import { SupplyService } from './supply.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('SupplyService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupplyService],
      imports: [HttpClientTestingModule]
    });
  });

  it('should be created', inject([SupplyService], (service: SupplyService) => {
    expect(service).toBeTruthy();
  }));
});
