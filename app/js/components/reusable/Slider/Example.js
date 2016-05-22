// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import Slider from './Slider';

export default class SliderExample extends Component {
    static defaultProps = {};
    props: {};

    state = { value: 1 }
    state : void;

    render () {
        const { value } = this.state;

        return (
            <View>
                <Slider value={value} handleChange={(v) => console.log(v)}/>
            </View>
        );
    }
}
