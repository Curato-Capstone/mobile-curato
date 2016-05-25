import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user as userActions, suggestions as suggestionsActions } from '../../modules/index';

class Suggestions extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        const { } = this.props;

        return (
            <View style={STYLES.container}>
                <Text>This is the suggestions page yo</Text>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 70
    }
});

function mapStateToProps(state) {
    const places =  state.get('places').toJS();

    return {
        favorites: state.getIn(['user', 'favorites']).toJS(),
        suggestions: state.getIn(['suggestions', 'suggestions']).toJS().map((id) => places[id]),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Suggestions);
