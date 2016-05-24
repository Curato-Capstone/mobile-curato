import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../reusable/Button/Button';
import { primaryColor } from '../../../utils/colors.js';
import { Field, reduxForm } from 'redux-form/immutable';
import validate from './validate';

const renderField = props => (
    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.name === 'password'}
        {...props}
    />
);

class SignUpForm extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        return (
            <Card>
                <Card.Body>
                    <Text style={STYLES.header}>Sign up!</Text>
                    <Text>
                        Now, create your account and start getting more
                        curated suggestions today!
                    </Text>
                </Card.Body>

                <Field name="email" type="email" component={renderField} placeholder="Email"/>
                <Field name="password" type="string" component={renderField} placeholder="Password"/>
                <Field name="name" type="string" component={renderField} placeholder="Name"/>
                <Field name="age" type="number" component={renderField} placeholder="Age"/>

                <Button
                    raised
                    overrides={{
                        backgroundColor: primaryColor,
                        textColor: '#ffffff'
                    }}
                    text="SUBMIT"
                />
            </Card>
        );
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default reduxForm({
    form: 'SignUpForm',  // a unique identifier for this form
    validate
})(SignUpForm);
