// @flow
import React, { Component } from 'react';
import {
    StyleSheet
} from 'react-native';
import { primaryColor } from '../../../utils/colors';
import Slider from 'react-native-slider';

export default class MySlider extends Component {
    static defaultProps = {};
    props: {
        value: number,
        handleChange: () => void,
        style: Object
    };
    state: void;

    render() {
        const { value, handleChange, ...other } = this.props;

        return (
            <Slider
                step={1}
                minimumValue={1}
                maximumValue={5}
                value={value}
                onSlidingComplete={handleChange}
                style={this.props.style}
                maximumTrackTintColor="#d3d3d3"
                {...other}
            />
        );
    }
}
