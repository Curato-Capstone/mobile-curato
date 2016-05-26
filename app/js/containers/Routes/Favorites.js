import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    ScrollView,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { user as userActions, suggestions as suggestionsActions } from '../../modules/index';
import PlaceRecord from '../../models/place';

import { primaryColor } from '../../utils/colors';

import PlaceCard from '../../components/reusable/PlaceCard/PlaceCard';

class Favorites extends Component {
    static defaultProps = {};
    props:{
        favorites: Array<Place>
    };
    state: void;

    render() {
        const { favorites } = this.props;

        return (
            <ScrollView
                contentContainerStyle={
                    [STYLES.container, {height: favorites.length * 355}]
                }
            >
                <View>
                {favorites.map((place, index) => {
                    return (
                        <View style={{ marginBottom: 20 }} key={place.id}>
                            <PlaceCard
                                key={place.id || index}
                                place={place}
                                favorite
                                hideDislike
                                handleFavorite={() => {}}
                                handleDislike={() => {}}
                            />
                        </View>
                    );
                })}
                {this.renderEmptyState()}
                </View>
            </ScrollView>
        );
    }

    renderEmptyState(): React.Element | void {
        const { favorites } = this.props;

        if (!favorites.length) {
            return (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center'
                    }}
                >
                    <Text>
                        You don't have any favorites! Get some
                        suggestions
                        to add some!
                    </Text>
                </View>
            );
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 70
    },

    suggestion: {
        marginBottom: 20
    }
});

function mapStateToProps(state) {
    const places =  state.get('places').toJS();

    return {
        favorites: state.get('user').toJS().favorites.map((id) => {
            if (places[id]) {
                return places[id];
            }

            return new PlaceRecord();
        })
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...userActions,
            ...suggestionsActions,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
