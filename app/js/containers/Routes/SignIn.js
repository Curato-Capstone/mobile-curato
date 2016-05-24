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

export default class SignIn extends Component {
    state = {

    };

    render() {
        return (
            <Card>
                <Card.Body>
                    <Text style={STYLES.header}>
                        Sign in to get your curated suggestions!
                    </Text>
                </Card.Body>

                <TextInput placeholder="Email" />
                <TextInput placeholder="Password" secureTextEntry />

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
