import { SET_READONLY_MODE, SET_FORM_MODE } from '../actions/form.actions';

export interface FormState {
    readonly: boolean;
}

export const initialFormState: FormState = {
    readonly: true
};

export function formReducer(state: FormState = initialFormState, action: any) {
switch (action.type) {
    case SET_READONLY_MODE: {
        return {
            ...state,
            readonly: true
        };
    }
    case SET_FORM_MODE: {
        return {
            ...state,
            readonly: false
        };
    }
}
    return state;
}
