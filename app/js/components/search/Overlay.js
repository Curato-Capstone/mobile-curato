// @flow
import React, { Component } from 'react';
import {
    Animated,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default class Overlay extends Component {
    static defaultProps = {};
    props: {};

    state = { opacity: new Animated.Value(0) }
    state : { opacity: Object };

    componentDidMount() {
        Animated.timing(
            this.state.opacity,
            { toValue: 1, duration: 200 },
        ).start()
    }

    render () {
        return <Animated.View style={[STYLES.overlay, { opacity: this.state.opacity }]} />
    }
}

const STYLES = StyleSheet.create({
    overlay: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'grey',
        // opacity: 0.6,
        marginTop: -10
    }
});
