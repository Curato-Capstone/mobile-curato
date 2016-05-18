import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Test from './Test';
import Loading from '../components/reusable/Loading/Loading';

export default class App extends Component {
    render() {
        const { global } = this.props;

        return (
            <View style={STYLES.container}>
                <Test />
                <Loading />
                <Test />
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
        position: 'relative',
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
