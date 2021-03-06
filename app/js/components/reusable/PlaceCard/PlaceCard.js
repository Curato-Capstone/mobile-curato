import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity,
} from 'react-native';
import { Actions as routerActions } from 'react-native-router-flux';

import { primaryColor } from '../../../utils/colors';
import { Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../Button/Button';

export default class PlaceCard extends Component {
    static defaultProps = {};
    props: {
        place: Object,
        favorite: boolean,
        hideDislike: bool,
        handleDislike: () => void,
        handleFavorite: () => void
    };
    state : void;

    render() {
        const { place, favorite, handleFavorite } = this.props;

        return (
            <View style={STYLES.container}>
                <Card image={{ uri: place.image }} style={STYLES.card}>
                    <Card.Media image={<Image source={{ uri: place.image }} style={STYLES.image} />} />
                    <Card.Body>
                        <Text style={STYLES.placeName}>{place.name}</Text>
                        <Text style={STYLES.address}>{place.location.address}</Text>
                    </Card.Body>
                    {this.renderActionButtons(place)}
                </Card>
            </View>
        );
    }

    renderActionButtons(place) {
        const { favorite, handleFavorite, handleDislike, hideDislike, baseline } = this.props;

        if (Platform.OS === 'ios') {
            let dislikeButton = (
                <TouchableOpacity
                    style={{ justifyContent: 'center', margin: 15 }}
                    onPress={() => handleDislike()}
                >
                    <Text style={[STYLES.ios.dislike]}>
                        I don't like this
                    </Text>
              </TouchableOpacity>
            );
            return (
                <View style={STYLES.actions}>
                    <TouchableOpacity
                        onPress={() => handleFavorite()}
                        style={STYLES.ios.heart(this.props.favorite)}
                    >
                        <Icon
                            name="heart" size={20}
                            style={{ color: this.props.favorite ? 'red' : 'grey' }}
                        />
                    </TouchableOpacity>
                    {hideDislike ? null : dislikeButton}
                    <TouchableOpacity
                        style={STYLES.ios.more.container}
                        onPress={() => baseline ? routerActions.place({ id: place.id }) : routerActions.place1({ id: place.id })}
                    >
                        <Text style={STYLES.ios.more.main}>
                            ...more
                        </Text>
                    </TouchableOpacity>
                </View>
            );
        }

        let dislikeButton = (
            <Button
                style={{
                    textColor: '#ff0000',
                    marginRight: 50
                  }}
                  label="I don't like this"
                  onPress={() => handleDislike()}
            />
        );

        return (
            <View style={STYLES.actions}>
                <TouchableOpacity
                    style={{
                        justifyContent: 'center',
                        marginHorizontal: 35
                    }}
                    onPress={() => handleFavorite()}
                >
                    <Icon name="heart" size={20}
                        style={{ color: this.props.favorite ? 'red' : 'grey' }}
                    />
                </TouchableOpacity>
                {hideDislike ? null : dislikeButton}
                <Button
                    style={{
                        textColor: '#0000ff',
                        marginRight: 50
                    }}
                    label="...more"
                    onPress={() => baseline ? routerActions.place({ id: place.id }) : routerActions.place1({ id: place.id })}
                />
            </View>
        );
    }
}

const STYLES = {
    container: {
        marginRight: 15,
        marginLeft: 15,
    },

    card: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
    },

    image: {
        height: 200,
        width: 358
    },

    placeName: {
        fontFamily: 'Montserrat-Light',
        color: 'grey',
        fontSize: 22
    },

    address: {
        color: primaryColor,
        fontFamily: 'Montserrat-Light',
        fontSize: 16
    },

    actions: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'space-around',
        marginTop: 5
    },

    ios: {
        heart: (favorite) => ({
            justifyContent: 'center',
            height: 40,
            // color: favorite ? 'red' : 'grey'
        }),

        dislike: {
            color: '#ff0000',
            fontWeight: 'bold',
            fontFamily: 'Montserrat-Regular'
        },

        more: {
            container: {
                justifyContent: 'center',
            },

            main: {
                color: '#0000ff',
                fontWeight: 'bold',
                fontFamily: 'Montserrat-Regular'
            }
        }
    }
};
