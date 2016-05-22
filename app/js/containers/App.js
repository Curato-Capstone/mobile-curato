import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import AndroidTabBar from '../components/reusable/react-native-android-tabbar';
import Loading from '../components/reusable/Loading/Loading';
import MessageBar from '../components/reusable/MessageBar/MessageBar';

import ButtonExample from '../components/reusable/Button/Example';
import SliderExample from '../components/reusable/Slider/Example';
import { primaryColor } from '../utils/colors.js';

class App extends Component {
    render() {
        const { global } = this.props;

        return (
            <View style={STYLES.container}>
                {this.renderComponents()}
            </View>
        );
    }

    renderComponents() {
        return (
            <View style={STYLES.app}>
                <SliderExample />
                {this.renderLoading()}
                {this.renderMessageBar()}
            </View>
        )
    }

    renderLoading() {
        const { global } = this.props;

        if (global.get('loading')) {
            return <Loading />
        }
    }

    renderMessageBar() {
        const { global } = this.props;
        const { errorMessage, successMessage } = global;

        if (errorMessage) {
            return <MessageBar type="error" message={errorMesage} />;
        } else if (successMessage) {
            return <MessageBar type="success" message={successMessage} />;
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        marginTop: 20,
        backgroundColor: '#F6F6F6',
    },

    app: {}
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
