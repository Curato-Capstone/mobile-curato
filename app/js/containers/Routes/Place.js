import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  Text,
  View,
  TouchableOpacity,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import request from 'superagent-bluebird-promise';
import MapView from 'react-native-maps';
import { Actions as routerActions } from 'react-native-router-flux';
import { user as userActions, global as globalActions } from '../../modules/index';
import { primaryColor } from '../../utils/colors';

class Place extends Component {
    static defaultProps = {};
    props: {
        actions: Object,
        suggestions: Array<Object>,
        favorites: Array<Object>,
        id: String
    };

    state = { place: null, scrollPosition: 0 };
    state : { place: Object, scrollPosition: number };

    componentWillMount() {
        const { actions, suggestions, id } = this.props;

        actions.setLoading(true);
        for (let i = 0; i < suggestions.length; i++) {
            if (suggestions[i].id === id) {
                this.setState({ place: suggestions[i] });
                actions.setLoading(false);
                return;
            }
        }

        request
            .get(`http://ec2-52-38-203-54.us-west-2.compute.amazonaws.com:5000/place/${id}`)
            .then((res) => {
                actions.setLoading(false);
                this.setState({ place: res.body });
            });
    }

    render() {
        const { place, scrollPosition } = this.state;

        if (place) {
            return (
                <View style={{ flex: 1 }}>
                    <View style={{ height: 175 - scrollPosition, position: 'absolute', left: 0, right: 0 }}>
                        <Image
                            style={STYLES.placeImage}
                            source={{ uri: place.image }}
                        />
                    </View>
                    <ScrollView
                        contentContainerStyle={STYLES.container}
                        onScroll={(b) => this.setState({ scrollPosition: b.nativeEvent.contentOffset.y })}
                        scrollEventThrottle={50}
                    >
                        <View>
                            <Text style={STYLES.placeName}>{place.name}</Text>
                            <Text style={STYLES.placeAddress}>{place.location.address}</Text>

                            {this.renderDescription(place.description)}

                            <View>
                                <Text style={STYLES.header}>Contact Info</Text>
                                {this.renderPhoneNumber(place.contact.formattedPhone)}
                                {this.renderTwitter(place.contact.twitter)}
                                {this.renderFourSquare(place.id)}
                                {this.renderWebsite(place.url)}
                            </View>

                            <View>
                                {this.renderHours(place.hours)}
                            </View>
                        </View>
                        {this.renderMap(place.location.lat, place.location.lng, place.name, place)}
                    </ScrollView>
                </View>
            );
        }
        return null;
    }

    renderDescription(description: string) {
        if (description) {
            return (
                <View>
                    <Text style={STYLES.header}>Description</Text>
                    <Text style={STYLES.infoText}>{description}</Text>
                </View>
            );
        }
    }

    renderPhoneNumber(phoneNumber: string) {
        if (phoneNumber) {
            return (
                <View style={STYLES.info}>
                    <Icon
                        name="phone"
                        size={25}
                        style={[{ color: 'black' }, STYLES.infoIcon]}
                    />
                    <Text style={STYLES.infoText}>{phoneNumber}</Text>
                </View>
            );
        }
    }

    renderTwitter(twitterLink: string) {
        if (twitterLink) {
            return (
                <View href={`http://www.twitter.com/${twitterLink}`} style={STYLES.info}>
                    <Icon
                        name="twitter"
                        size={25}
                        style={[{ color: '#019FE9' }, STYLES.infoIcon]}
                    />
                    <Text style={STYLES.infoText}>{twitterLink}</Text>
                </View>
            );
        }
    }

    renderFourSquare(venueID: string) {
        return (
            <View href={`http://www.foursquare.com/v/${venueID}`} style={STYLES.info}>
                <Icon
                    name="foursquare"
                    size={25}
                    style={[{ color: '#F94876' }, STYLES.infoIcon]}
                />
                <Text style={STYLES.infoText}>Venue Page</Text>
            </View>
        );
    }

    renderWebsite(website: string) {
        if (website) {
            return (
                <View href={website} style={STYLES.info}>
                    <Icon
                        name="globe"
                        size={25}
                        style={[{ color: 'green' }, STYLES.infoIcon]}
                    />
                    <Text style={STYLES.infoText}>Website</Text>
                </View>
            );
        }
    }

    renderHours(hours: Object) {
        const hoursList = [['Monday', 'Mon'], ['Tuesday', 'Tue'], ['Wednesday', 'Wed'],
            ['Thursday', 'Thu'], ['Friday', 'Fri'], ['Saturday', 'Sat'], ['Sunday', 'Sun']];

        const dayLookup = {
            Sunday: 0,
            Monday: 1,
            Tuesday: 2,
            Wednesday: 3,
            Thursday: 4,
            Friday: 5,
            Saturday: 6
        };

        const dayNumber = new Date().getDay();

        if (hours) {
            return (
                <View>
                    <Text style={STYLES.header}>Hours</Text>
                    {hoursList.map((day) => (
                        <View key={day[0]} style={STYLES.hours}>
                            <Text style={STYLES.hour(dayLookup[day[0]] === dayNumber)}>
                                {day[0]}:
                            </Text>
                            <Text style={STYLES.hourText(hours[day[1]])}>
                                {hours[day[1]]}
                            </Text>
                        </View>
                    ))}
                </View>
            );
        }
    }

    renderMap(lat: number, lng: number, name: string, place: Object) {
        return (
            <View style={{ flex: 1 }}>
                <Text style={STYLES.header}>Location</Text>
                <TouchableOpacity onPress={() => routerActions.fullmap({ places: [place] })}>
                    <Text style={STYLES.viewMap}>
                        View Full Map
                    </Text>
                </TouchableOpacity>
                <MapView
                    style={STYLES.map}
                    initialRegion={{
                        latitude: lat,
                        longitude: lng,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                >
                    <MapView.Marker
                        coordinate={{ latitude: lat, longitude: lng }}
                        title={name}
                        description={`This is where ${name} is!`}
                    />
                </MapView>
            </View>
        );
    }
}

const STYLES = {
    container: {
        marginLeft: 5,
        marginRight: 5,
        // flex: 1,
        marginTop: 175,
        height: 1000
    },

    placeImage: {
        flex: 1,
    },

    placeName: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 24,
        color: 'grey'
    },

    placeAddress: {
        fontFamily: 'Montserrat-Light',
        fontSize: 20,
        color: primaryColor
    },

    header: {
        fontFamily: 'Montserrat-Regular',
        fontSize: 20,
        marginBottom: 10,
        marginTop: 10,
        color: primaryColor
    },

    info: {
        flexDirection: 'row',
        alignItems: 'center',
    },

    infoText: {
        fontFamily: 'Montserrat-Light'
    },

    infoIcon: {
        marginRight: 7,
        width: 26
    },

    hours: {
        flexDirection: 'row',
    },

    hour: (isToday) => ({
        fontFamily: isToday ? 'Montserrat-Bold' : 'Montserrat-Light',
        width: 90
    }),

    hourText: (text) => ({
        color: text === 'Closed' ? '#c62828' : '#2E7D32',
        fontFamily: 'Montserrat-Regular'
    }),

    map: {
        flex: 1,
        marginRight: 10,
        marginTop: 10,
        marginBottom: 100,

        // width: 100,
    },

    viewMap: {
        fontFamily: 'Montserrat-Light',
        textDecorationLine: 'underline'
    }
};

function mapStateToProps(state) {
    const places =  state.get('places').toJS();

    return {
        suggestions: state.getIn(['suggestions', 'suggestions']).toJS().map((id) => places[id]),
        favorites: state.getIn(['user', 'favorites']).toJS(),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...userActions,
            ...globalActions,
        }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Place);
