import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Provider } from '../model/provider.model';

const HOST = 'http://localhost:8080/api';
const ENDPOINT = 'provider';

@Injectable({
  providedIn: 'root'
})
export class ProviderService {

  constructor(private http: HttpClient) { }

  getAllProviders(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${HOST}/${ENDPOINT}`);
  }

  getAllProvidersNotEmpty(): Observable<Provider[]> {
    return this.http.get<Provider[]>(`${HOST}/${ENDPOINT}/notEmpty`);
  }

  getProviderById(id: number): Observable<Provider> {
    return this.http.get<Provider>(`${HOST}/${ENDPOINT}/` + id);
  }

  updateProvider(provider: Provider): Observable<Provider> {
    return this.http.put<Provider>(`${HOST}/${ENDPOINT}/${provider.id}`, provider);
  }

  createProvider(provider: Provider): Observable<Provider> {
    return this.http.post<Provider>(`${HOST}/${ENDPOINT}`, provider);
  }
}
