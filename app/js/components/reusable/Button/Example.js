// @flow
import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import Button from './Button';

export default class ButtonExample extends Component {
    static defaultProps = {};
    props: {};
    state: void;

    render() {
        return (
            <View>
                <Button label="hiii bruh" handlePress={() => {}} />
                <Button label="hiii bruh" disabled />
            </View>
        );
    }
}
