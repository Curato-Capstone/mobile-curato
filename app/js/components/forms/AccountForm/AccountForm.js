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

    shouldComponentUpdate = () => { return false };

    render() {
        const { handleSubmit, submitting } = this.props;

        const renderField = props => (
            <View>
                <Input
                    placeholder={props.placeholder}
                    keyboardType={props.keyboardType}
                    autoCapitalize={props.autoCapitalize}
                />
            </View>
        );

        return (
            <View style={STYLES.container} onSubmit={handleSubmit}>
                <Text style={STYLES.header}>Update your account information</Text>

                <View style={STYLES.fieldContainer}>
                    <Field
                        name="name"
                        component={renderField}
                        placeholder="name" />
                </View>

                <View style={STYLES.fieldContainer}>
                    <Field
                        name="age"
                        component={renderField}
                        placeholder="age"
                        keyboardType="numeric" />
                </View>

                <Button
                    label="Update"
                    disabled={submitting}
                    handlePress={handleSubmit}
                    raised
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
