import { TestBed, inject } from '@angular/core/testing';
import { RequestService } from './request.service';
import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { Request } from '../model/request.model';
import * as Mock from '../mocks/request.mock.spec';

describe('RequestService', () => {
  let requestService: RequestService;
  let http: HttpTestingController;
  let singleRequest: Request;



  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RequestService],
      imports: [HttpClientTestingModule]
    });
    requestService = TestBed.get(RequestService);
    http = TestBed.get(HttpTestingController);
  });

  afterEach( () => {
    http.verify();
  });

  it('should be created', inject([RequestService], (service: RequestService) => {
    expect(service).toBeTruthy();
  }));

  describe('getRequestById', () => {
    beforeEach(() => {
       requestService.getRequestById(0).subscribe(
        data => singleRequest = data
      );
    });
    it('should return 23', () => {
      http.expectOne('http://localhost:8080/api/request/0')
        .flush(Mock.REQUEST_LIST_ENTRY[0]);
      expect(singleRequest.quantity).toBe(23);
    });
    it('should have a GET method', () => {
      const req = http.expectOne('http://localhost:8080/api/request/0');
      expect(req.request.method).toBe('GET');
    });
  });
});
