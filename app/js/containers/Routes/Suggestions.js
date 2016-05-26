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
                    {suggestions.map((place, index) => (
                        <View style={STYLES.suggestion} key={place.id}>
                            <PlaceCard
                                place={place}
                                favorite={this.checkFavorited(place)}
                                handleFavorite={() => this.handleFavorite(place, index)}
                                handleDislike={() => this.handleDislike(place, index)}
                            />
                        </View>
                    ))}
                </View>
            </ScrollView>
        );
    }

    checkFavorited(place) {
        const { favorites } = this.props;
        for (let i = 0; i < favorites.length; i ++) {
            if (favorites[i] === place.id) {
                return true;
            }
        }

        return false;
    }

    handleFavorite(place) {
        if (this.checkFavorited(place)) {
            this.props.actions.removeFavoriteThunk(place.id);
        } else {
            this.props.actions.addFavoriteThunk(place.id);
        }
    }

    handleDislike(place, index) {
        this.props.actions.dislikePlace(place.id);
        this.props.actions.removeSuggestion(index);
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
