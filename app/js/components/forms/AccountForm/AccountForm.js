import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { Field, reduxForm } from 'redux-form/immutable';

import validate from './validate';

import Input from '../../reusable/Input/TextField';
import Button from '../../reusable/Button/Button';


class AccountForm extends Component {
    static defaultProps = { submitting: false };
    props: {
        handleSubmit: () => void,
        submitting: boolean
    };
    state: void;

    render() {
        const { handleSubmit, submitting } = this.props;

        const renderEmailField = () => {
            return (
                <View>
                    <Input
                        placeholder="email"
                        handleChange={(value) => console.log(value)}
                        autoCapitalize="none"
                        keyboardType="email-address"
                    />
                </View>
            );
        };

        const renderNameField = () => {
            return (
                <View>
                    <Input
                        placeholder="name"
                        handleChange={(value) => console.log(value)}
                    />
                </View>
            );
        };

        const renderAgeField = () => {
            return (
                <View>
                    <Input
                        placeholder="age"
                        handleChange={(value) => console.log(value)}
                        keyboardType="numeric"
                    />
                </View>
            );
        };

        return (
            <View style={STYLES.container} onSubmit={handleSubmit}>
                <View style={STYLES.fieldContainer}>
                    <Field name="email" component={renderEmailField} />
                </View>

                <View style={STYLES.fieldContainer}>
                    <Field name="name" component={renderNameField} />
                </View>

                <View style={STYLES.fieldContainer}>
                    <Field name="age" component={renderAgeField} />
                </View>

                <Button
                    label="Update"
                    disabled={submitting}
                    handlePress={handleSubmit}
                />
            </View>
        );
    };

}

const STYLES = StyleSheet.create({
    container: {
        paddingTop: 50
    },
    fieldContainer: {
        marginBottom: 20
    }
});

AccountForm = reduxForm({
    form: 'AccountForm',
    validate
})(AccountForm);

AccountForm = connect((state) => ({ initialValues: state.get('user') }))(AccountForm);

export default AccountForm;