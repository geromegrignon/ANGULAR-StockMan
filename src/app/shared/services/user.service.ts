import { Injectable } from '@angular/core';
import { User } from '../model/user.model';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { tap, switchMap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public currentUser: BehaviorSubject<User> = new BehaviorSubject(null);

  constructor(private http: HttpClient) { }

  public getCurrentUser(): Observable<User> {
      return this.http.get<User>('/api/user/current');
  }
}

