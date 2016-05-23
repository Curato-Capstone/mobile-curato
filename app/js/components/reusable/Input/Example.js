// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import TextField from './TextField';

export default class Example extends Component {
    static defaultProps = {};
    props: {};

    state = { value: '' }
    state : { value: string };

    render() {
        const { value } = this.state;

        return (
            <View>
                <TextField
                    value={value}
                    handleChange={(text) => this.setState({ value: text })}
                    placeholder="Placeholder text"
                />
            </View>
        );
    }
}
