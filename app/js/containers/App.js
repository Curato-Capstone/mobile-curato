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
import Button from '../components/reusable/Button/Button';
import { primaryColor } from '../utils/colors.js';

class App extends Component {
    render() {
        const { global } = this.props;

        return (
            <View style={STYLES.container}>
                {this.renderComponents()}
                <Button label="hiii bruh" handlePress={() => console.log('hi bruhhh')}/>
                <Button label="hiii bruh" disabled />
            </View>
        );
    }

    renderComponents() {
        return (
            <View>
                {this.renderLoading()}
            </View>
        )
    }

    renderLoading() {
        const { global } = this.props;

        if (global.get('loading')) {
            return <Loading />
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingLeft: 10,
        paddingRight: 10,
        backgroundColor: '#F6F6F6',
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
