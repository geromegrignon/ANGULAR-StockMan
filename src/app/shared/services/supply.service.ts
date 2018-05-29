import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Supply } from '../model/supply.model';

 const HOST = 'http://localhost:8080/api';
 const ENDPOINT = 'supply';

@Injectable({
  providedIn: 'root'
})
export class SupplyService {

  constructor(private http: HttpClient) { }

  getAllSupplies(): Observable<Supply[]> {
    return this.http.get<Supply[]>(`${HOST}/${ENDPOINT}`);
  }

  getOnAlertSuppplies(): Observable<Supply[]> {
    return this.http.get<Supply[]>(`${HOST}/${ENDPOINT}/alert`);
  }

  getSupply(id: number): Observable<Supply> {
    return this.http.get<Supply>(`${HOST}/${ENDPOINT}/` + id);
  }

  updateSupply(supply: Supply): Observable<Supply> {
    return this.http.put<Supply>(`${HOST}/${ENDPOINT}/${supply.id}`, supply);
  }
}
