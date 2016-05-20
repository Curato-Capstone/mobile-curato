import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AndroidTabBar from '../components/reusable/react-native-android-tabbar';
import { primaryColor } from '../utils/colors.js';
import Intro from './Routes/Intro';

export default class App extends Component {
    render() {
        const { global } = this.props;

        return (
            <View style={STYLES.container}>
                <Intro />
            </View>
        );
    }

    renderLoading() {
        const { global } = this.props;

        if (global.get('loading')) {
            return
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: primaryColor,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10
    }
});

function mapStateToProps(state, ownProps) {
    return {
        user: state.get('user'),
        suggestions: state.get('suggestions'),
        global: state.get('global'),
        auth: state.get('auth'),
        location: ownProps.location
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
