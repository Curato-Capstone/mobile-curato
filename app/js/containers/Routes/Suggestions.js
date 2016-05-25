import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as routerActions } from 'react-native-router-flux';
import { user as userActions, suggestions as suggestionsActions } from '../../modules/index';

import PlaceCard from '../../components/reusable/PlaceCard/PlaceCard';

class Suggestions extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        const { suggestions } = this.props;

        return (
            <ScrollView contentContainerStyle={STYLES.container}>
                <View>
                    {suggestions.map((suggestion) => (
                        <View style={STYLES.suggestion} key={suggestion.id}>
                            <PlaceCard
                                place={suggestion}
                                favorite={true}
                                handleDislike={() => {}}
                                handleFavorite={() => {}}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 70,
        height: 1000
    },

    suggestion: {
        marginBottom: 20
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
