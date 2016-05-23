import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ActivityIndicatorIOS
} from 'react-native';

import { primaryColor } from '../../../utils/colors';

export default class Loading extends Component {
    render () {
        return (
            <ActivityIndicatorIOS
                animating
                color={primaryColor}
                style={STYLES.main}
            />
        );
    }
}

const STYLES = StyleSheet.create({
    main: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
    }
});
