import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../reusable/Button/Button';
import { primaryColor } from '../../../utils/colors.js';
import { Field, reduxForm } from 'redux-form/immutable';
import TextInput from '../../reusable/Input/TextField';
import validate from './validate';


class SignInForm extends Component {
    static defaultProps = {};
    props: { onSubmit: () => void };
    state : void;

    shouldComponentUpdate = () => { return false };

    render() {
        const { onSubmit } = this.props;

        const renderField = props => (
            <TextInput
                placeholder={props.placeholder}
                secureTextEntry={props.name === 'password'}
                {...props}
            />
        );

        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={[STYLES.shadow, {paddingBottom: 10, marginHorizontal: 15}]}>
                    <Card.Body>
                        <Text style={STYLES.header}>
                            Sign in to get your curated suggestions!
                        </Text>
                    </Card.Body>

                    <View style={STYLES.fieldContainer}>
                        <Field name="email"
                               type="email"
                               component={renderField}
                               placeholder="Email"
                               keyboard="email-address"
                               autoCapitalize="none"/>
                    </View>
                    <View style={STYLES.fieldContainer}>
                        <Field name="password"
                               type="string"
                               component={renderField}
                               placeholder="Password"/>
                    </View>

                    <Button
                        raised
                        label="SUBMIT"
                        style={{
                            backgroundColor: primaryColor,
                        }}
                        handlePress={onSubmit}
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
    },


    fieldContainer: {
        marginBottom: 20
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    }
});

export default reduxForm({
    form: 'SignInForm',  // a unique identifier for this form
    validate
})(SignInForm);
