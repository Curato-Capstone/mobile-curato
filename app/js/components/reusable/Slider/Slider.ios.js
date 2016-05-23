// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Slider
} from 'react-native';

export default class SliderIOS extends Component {
    static defaultProps = {};
    props: {
        value: number,
        handleChange: () => void
    };
    state: void;

    render () {
        const { value, handleChange } = this.props;

        return (
            <Slider
                step={1}
                minimumValue={1}
                maximumValue={5}
                value={value}
                onSlidingComplete={handleChange}
            />
        );
    }
}

const STYLES = StyleSheet.create({

});
