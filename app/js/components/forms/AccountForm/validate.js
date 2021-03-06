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

    const name = values.get('name');
    if (!name) {
        errors.name = 'Name is required!';
    }

    const age = values.get('age');
    if (age && isNaN(Number(age))) {
        errors.age = 'Must be a number!';
    } else if (age <= 0) {
        errors.age = 'Are you really that young?';
    } else if (age > 100) {
        errors.age = 'Are you really that old?';
    }

    return errors;
}

export default validate;
