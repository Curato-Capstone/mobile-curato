import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Search extends Component {
    render() {
        const { } = this.props;

        return (
            <View style={STYLES.container}>
                <Text>This is the search page yo</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {

    }
});

function mapStateToProps(state, ownProps) {
    return {
        // user: state.get('user'),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
