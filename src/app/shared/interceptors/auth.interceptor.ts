import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { State } from '../store';
import { tokenSelector } from '../store/selectors/auth.selectors';
import { Injectable } from '@angular/core';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    public token: string;

    constructor(private store: Store<State>) {
        this.store.pipe(
            select(tokenSelector)
        ).subscribe( (token: string) => {
            this.token = token;
        });
    }



    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (this.token) {
            const authReq = req.clone({
                headers: req.headers.set('authorization', this.token)
            });
            return next.handle(authReq);
        } else {
            return next.handle(req);
        }
    }
}
