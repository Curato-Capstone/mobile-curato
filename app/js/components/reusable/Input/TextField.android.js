// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TextInput
} from 'react-native';

export default class TextField extends Component {
    static defaultProps = {};
    props: {
        value: string,
        placeholder: string,
        handleChange: () => void
    };
    state: void;

    render() {
        const { value, handleChange, placeholder, ...other } = this.props;

        return (
            <View style={STYLES.container}>
                <TextInput
                    value={value}
                    placeholder={placeholder}
                    onChangeText={handleChange}
                    style={STYLES.input}
                    {...other}

                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginLeft: 5,
        marginRight: 5
    }
});
