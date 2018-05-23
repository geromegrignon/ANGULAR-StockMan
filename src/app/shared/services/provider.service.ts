import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../model/provider.model';

const HOST = 'http://localhost:8080/api';
const ENDPOINT = 'provider2';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${HOST}/${ENDPOINT}`);
  }
}
