// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user as userActions, suggestions as suggestionsActions } from '../modules/index';

class Test extends Component {
    static defaultProps = {};
    props: { };
    state: void;

    render() {
        console.log(this.props)
        return (
            <Text>Here!!!!!</Text>
        );
    }
}

function mapStateToProps(state) {
    return {
        searchText: state.get('suggestions').toJS().searchText,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...userActions,
            ...suggestionsActions,
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Test);
