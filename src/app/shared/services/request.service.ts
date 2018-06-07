import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Request } from '../model/request.model';

const HOST = 'http://localhost:8080/api';
const ENDPOINT = 'request';

@Injectable({
  providedIn: 'root'
})
export class RequestService {

  constructor(private http: HttpClient) { }

  getAllRequests(): Observable<Request[]> {
    return this.http.get<Request[]>(`${HOST}/${ENDPOINT}`);
  }

  getRequestById(id: number): Observable<Request> {
    return this.http.get<Request>(`${HOST}/${ENDPOINT}/` + id);
  }

  createRequest(request: Request): Observable<Request> {
    return this.http.post<Request>(`${HOST}/${ENDPOINT}`, request);
  }

  updateRequest(request: Request): Observable<Request> {
    return this.http.put<Request>(`${HOST}/${ENDPOINT}/${request.id}`, request);
  }
}
