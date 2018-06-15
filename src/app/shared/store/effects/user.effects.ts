import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { UserService } from '../../services/user.service';
import { TryFetchUserList, TRY_FETCH_USER_LIST, FetchUserListSuccess, FetchUserListError } from '../actions/user.actions';
import { switchMap, catchError, map } from 'rxjs/operators';
import { User } from '../../model/user.model';
import { of } from 'rxjs';

@Injectable()
export class UserEffects {

    constructor(
        private actions$: Actions,
        private userService: UserService
    ) {}

    @Effect()
    fetchUserList$ = this.actions$.pipe(
        ofType<TryFetchUserList>(TRY_FETCH_USER_LIST),
        switchMap(() => this.userService.getAllusers().pipe(
            map((userList: User[]) => new FetchUserListSuccess(userList)),
            catchError((error) => of(new FetchUserListError(error)))
        ))
    );

}
