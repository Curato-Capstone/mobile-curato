import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
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

class SignInForm extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={{paddingBottom: 10, marginHorizontal: 15}}>
                    <Card.Body>
                        <Text style={STYLES.header}>
                            Sign in to get your curated suggestions!
                        </Text>
                    </Card.Body>

                    <Field name="email" type="email" component={renderField} placeholder="Email"/>
                    <Field name="password" type="string" component={renderField} placeholder="Password"/>

                    <Button
                        raised
                        overrides={{
                            backgroundColor: primaryColor,
                            textColor: '#ffffff'
                        }}
                        text="SUBMIT"
                    />
                </Card>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Montserrat-Regular'
    }
});

export default reduxForm({
    form: 'SignInForm',  // a unique identifier for this form
    validate
})(SignInForm);
