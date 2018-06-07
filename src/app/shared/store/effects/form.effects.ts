import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { State } from '..';
import { ofType, Effect, Actions } from '@ngrx/effects';
import { switchMap, tap } from 'rxjs/operators';
import { SetReadonlyMode, SET_READONLY_MODE, SetFormMode, SET_FORM_MODE } from '../actions/form.actions';

@Injectable()
export class FormEffects {
    constructor(
        private actions$: Actions,
        private store: Store<State>
    ) {}

    @Effect()
    setReadonlyMode$ = this.actions$.pipe(
        ofType<SetReadonlyMode>(SET_READONLY_MODE)
    );

    @Effect()
    setFormMode$ = this.actions$.pipe(
        ofType<SetFormMode>(SET_FORM_MODE)
    );
}
