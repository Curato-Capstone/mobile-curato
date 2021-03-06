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

const renderField = (props) => {
    const allGood = props.touched && props.error;

    return (
        <View>
            <TextInput
                placeholder={props.placeholder}
                secureTextEntry={props.name === 'password'}
                {...props}
            />
            {allGood ?
                <Text style={{ color: '#ff0000' }}>{props.error}</Text> : null
            }
        </View>
    );
};

class SignUpForm extends Component {
    static defaultProps = {};
    props: { onSubmit: () => void };
    state : void;

    shouldComponentUpdate = () => { return false };

    render() {
        const { onSubmit } = this.props;

        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={[STYLES.shadow, {paddingBottom: 10, marginHorizontal: 15}]}>
                    <Card.Body>
                        <Text style={STYLES.header}>Sign up!</Text>
                        <Text style={{fontFamily: 'Montserrat-Regular'}}>
                            Now, create your account and start getting more
                            curated suggestions today!
                        </Text>
                    </Card.Body>

                    <View style={STYLES.fieldContainer}>
                        <Field name="email" type="email" component={renderField} placeholder="Email" autoCapitalize="none"/>
                    </View>
                    <View style={STYLES.fieldContainer}>
                        <Field name="password" type="string" component={renderField} placeholder="Password"/>
                    </View>
                    <View style={STYLES.fieldContainer}>
                        <Field name="name" type="string" component={renderField} placeholder="Name"/>
                    </View>
                    <View style={STYLES.fieldContainer}>
                        <Field name="age" type="number" component={renderField} placeholder="Age"/>
                    </View>

                    <Button
                        raised
                        label="SUBMIT"
                        style={{
                            backgroundColor: primaryColor,
                            textColor: '#ffffff'
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
    form: 'SignUpForm',  // a unique identifier for this form
    validate
})(SignUpForm);
