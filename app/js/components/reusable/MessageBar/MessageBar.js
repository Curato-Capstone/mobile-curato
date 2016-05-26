// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class MessageBar extends Component {
    static defaultProps = {};
    props: {
        message: string,
        type: "warning" | "success" | "error"
    };
    state: void;

    render() {
        const { message, type } = this.props;

        return (
            <View style={[STYLES.messageBar, this.getBarColor(type)]}>
                <Text style={STYLES.text}>{message}</Text>
            </View>
        );
    }

    getBarColor(type) {
        if (type === 'warning') {
            return { backgroundColor: '#FFF176' };
        } else if (type === 'success') {
            return { backgroundColor: '#81C784' };
        }
        return { backgroundColor: '#E57373' };
    }
}

const STYLES = StyleSheet.create({
    messageBar: {
        position: 'absolute',
        top: 62,
        left: 0,
        right: 0,
        flex: 1,
        padding: 7,
        alignItems: 'center'
    },

    text: {
        color: 'white',
        fontFamily: 'Montserrat-Regular'
    }
});
