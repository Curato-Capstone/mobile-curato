import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

class Preferences extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        const { } = this.props;

        return (
            <View style={STYLES.container}>
                <Text>This is the preferences page yo</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 70
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

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
