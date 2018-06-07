import * as FormReducer from './form.reducer';

describe('FormReducer', () => {
    it('should return initial state', () => {
        const { initialFormState } = FormReducer;
        const action = {} as any;
        expect(FormReducer.formReducer(undefined, action)).toEqual(initialFormState);

    });
});
