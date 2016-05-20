// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { primaryColor } from '../../../utils/colors';

import Button from 'apsl-react-native-button';

export default class iOSButton extends Component {
    render () {
        return (
            <Button
                style={STYLES.button}
                textStyle={STYLES.buttonText}
            >
                Words
            </Button>
        );
    }
}

const STYLES = StyleSheet.create({
    button: {
        backgroundColor: primaryColor,
        borderColor: 'white'
    },

    buttonText: {
        fontSize: 16,
        color: 'white'
    }
});
