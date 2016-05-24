import React, { Component } from 'react';
import {
    View,
    StyleSheet,
    ActivityIndicatorIOS
} from 'react-native';

import { primaryColor } from '../../../utils/colors';

export default class Loading extends Component {
    render() {
        return (
            <View style={STYLES.main} pointerEvents="none">
                <ActivityIndicatorIOS
                    animating
                    color={primaryColor}
                />
            </View>
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
        alignItems: 'center',
        justifyContent: 'center'
    }
});
