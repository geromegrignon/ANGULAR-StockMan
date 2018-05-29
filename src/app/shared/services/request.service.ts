import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { OrderRequest } from '../model/orderRequest.model';

const HOST = 'http://localhost:8080/api';
const ENDPOINT = 'request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<OrderRequest[]> {
    return this.http.get<OrderRequest[]>(`${HOST}/${ENDPOINT}`);
  }

  createRequest(request: OrderRequest): Observable<OrderRequest> {
    return this.http.post<OrderRequest>(`${HOST}/${ENDPOINT}`, request);
  }
}
