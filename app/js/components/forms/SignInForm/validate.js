// @flow
import type { Map } from 'immutable';

function validate(values: Map<string, any>): Object {
    const errors = {};

    const email = values.get('email');
    if (!email) {
        errors.email = 'Email is required!';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
        errors.email = 'Invalid Email!';
    }

    const password = values.get('password');
    if (!password) {
        errors.password = 'Password is required!';
    } else if (password.length < 8) {
        errors.password = 'Password must be at least 8 characters!';
    } else if (password.length > 20) {
        errors.password = 'Password can only be a max of 20 characters!';
    }

    return errors;
}

export default validate;
