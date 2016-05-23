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
        console.log('here')
        return (
            <View style={[STYLES.messageBar, this.getBarColor(type)]}>
                <Text>{message}</Text>
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
        top: 0,
        left: 0,
        right: 0,
        flex: 1,
        padding: 7,
        alignItems: 'center'
    }
});
