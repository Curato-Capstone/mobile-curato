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
    static defaultProps = {
        disabled    : false
    };
    props: {
        label       : string,
        handlePress : (event: Object) => void,
        disabled    : boolean
    };
    state: void;

    render () {
        const { label, handlePress, disabled } = this.props;

        return (
            <View
                style={disabled ? STYLES.disabled : {}}
                pointerEvents={disabled ? 'none' : 'auto'}
            >
                <Button
                    style={[
                        STYLES.button,
                        this.props.style,
                    ]}
                    textStyle={STYLES.buttonText}
                    onPress={handlePress}
                    disabled={disabled}
                >
                    {label}
                </Button>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    button: {
        marginLeft: 50,
        marginRight: 50,
        backgroundColor: primaryColor,
        borderColor: 'rgba(0, 0, 0, 0)',
    },

    disabled: {
        opacity: 0.5,
    },

    buttonText: {
        fontSize: 16,
        color: 'white'
    }
});
