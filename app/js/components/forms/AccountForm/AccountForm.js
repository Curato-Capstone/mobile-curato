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
import { primaryColor } from '../../../utils/colors';


class AccountForm extends Component {
    static defaultProps = { submitting: false };
    props: {
        handleSubmit: () => void,
        submitting: boolean
    };
    state: void;

    render() {
        const { handleSubmit, submitting } = this.props;

        const renderEmailField = () => (
            <View>
                <Input
                    placeholder="email"
                    handleChange={(value) => console.log(value)}
                    autoCapitalize="none"
                    keyboardType="email-address"
                />
            </View>
        );

        const renderNameField = () => (
            <View>
                <Input
                    placeholder="name"
                    handleChange={(value) => console.log(value)}
                />
            </View>
        );

        const renderAgeField = () => (
            <View>
                <Input
                    placeholder="age"
                    handleChange={(value) => console.log(value)}
                    keyboardType="numeric"
                />
            </View>
        );

        return (
            <View style={STYLES.container} onSubmit={handleSubmit}>
                <Text style={STYLES.header}>Update your account information</Text>
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
        justifyContent: 'center',
        padding: 20,
        alignSelf: 'stretch',
        marginHorizontal: 20,
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height: 4
        },
        shadowRadius: 3,
        shadowColor: '#888888',
        shadowOpacity: 0.9
    },
    fieldContainer: {
        marginBottom: 20
    },
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20,
        fontFamily: 'Montserrat-Regular'
    }
});

AccountForm = reduxForm({
    form: 'AccountForm',
    validate
})(AccountForm);

AccountForm = connect((state) => ({ initialValues: state.get('user') }))(AccountForm);

export default AccountForm;