import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user as userActions, suggestions as suggestionsActions } from '../../modules/index';
import { Actions as routerActions } from 'react-native-router-flux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlaceCard from '../../components/reusable/PlaceCard/PlaceCard';

class BaselineSuggestions extends Component {
    state = {
        suggIndex: 0
    };

    render() {
        const { suggIndex } = this.state;
        const { actions, suggestions } = this.props;

        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={[STYLES.shadow, {paddingBottom: 10, marginHorizontal: 15}]}>
                    <Card.Body>
                        <Text style={STYLES.header}>Your Suggestions!</Text>
                        <Text style={{ fontFamily: 'Montserrat-Regular', textAlign: 'center', fontSize: 14 }}>
                            These are the suggestions we came up with! If you like
                            it, tap on the heart to add it to your favorites.
                            We use this information to
                            help give you even better suggestions in the future!
                        </Text>
                    </Card.Body>

                    {suggestions.length != 0 ?
                        <PlaceCard
                            place={suggestions[suggIndex]}
                            hideDislike
                            favorite={this.checkFavorited(suggestions[suggIndex])}
                            handleFavorite={() => this.handleFavorite(suggestions[suggIndex])}
                        /> :
                         null}
                         <View style={STYLES.suggestions}>
                         <Icon.Button
                            onPress={() => {
                                if (suggIndex !== 0) {
                                    this.setState({
                                        suggIndex: suggIndex - 1,
                                    });
                                }
                            }}
                            name="arrow-left"
                            size={40}
                            color={suggIndex === 0 ? 'gray' : primaryColor}
                            backgroundColor="white"
                        />
                        <Text
                          style={{
                              marginTop: 15,
                              fontSize: 20,
                              marginRight: 10,
                              fontFamily: 'Montserrat-Regular'
                          }}
                        >
                          {(suggIndex + 1) + '/' + suggestions.length}
                        </Text>
                        <Icon.Button
                            onPress={() => {
                                if (suggIndex < suggestions.length - 1) {
                                    this.setState({
                                        suggIndex: suggIndex + 1,
                                    });
                                }
                            }}
                            name="arrow-right"
                            size={40}
                            color={suggIndex === suggestions.length - 1 ? 'gray' : primaryColor}
                            backgroundColor="white"
                        />
                    </View>

                    <Button
                        raised
                        label="ONE LAST STEP!"
                        handlePress={() => routerActions.signup()}
                    />
                </Card>
            </View>
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
            this.props.actions.removeFavoriteIntro(place.id);
        } else {
            this.props.actions.addFavorite(place.id);
        }
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 30,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Montserrat-Regular'
    },
    suggestions: {
        justifyContent: 'center',
        flex: 1,
        flexDirection: 'row',
        marginBottom: 15
    },

    shadow: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
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
export default connect(mapStateToProps, mapDispatchToProps)(BaselineSuggestions);
