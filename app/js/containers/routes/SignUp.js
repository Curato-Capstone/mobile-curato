import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';

export default class SignUp extends Component {
    state = {

    };

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

                <TextInput placeholder="Email" />
                <TextInput placeholder="Password" secureTextEntry />
                <TextInput placeholder="Name" />
                <TextInput placeholder="Age" />

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
