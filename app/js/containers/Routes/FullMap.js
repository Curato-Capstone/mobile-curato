import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from 'react-native';
import MapView from 'react-native-maps';
import { Actions as routerActions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';


export default class FullMap extends Component {
    static defaultProps = {};
    props: { places: Array<{lat: number, lng: number, name: string}> };
    state : void;

    render() {
        const { places } = this.props;

        return (
            <View style={STYLES.container}>
                <MapView
                    style={STYLES.map}
                    initialRegion={{
                        latitude: places[0].location.lat,
                        longitude: places[0].location.lng,
                        latitudeDelta: 0.0422,
                        longitudeDelta: 0.0421,
                    }}
                >
                    {places.map((place) => (
                        <MapView.Marker
                            key={place.id}
                            coordinate={{
                                latitude: place.location.lat,
                                longitude: place.location.lng
                            }}
                            title={place.name}
                            description={`This is where ${place.name} is!`}
                        />
                    ))}
                </MapView>
                <TouchableOpacity style={STYLES.arrowContainer} onPress={() => routerActions.pop()}>
                    <Icon
                        name="arrow-left"
                        size={25}
                        style={STYLES.arrow}
                    />
                </TouchableOpacity>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1
    },

    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    },

    arrowContainer: {
        position: 'absolute',
        top: 30,
        left: 20,
        width: 50,
        height: 50,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        opacity: 0.9,
        borderRadius: 5
    },

    arrow: {
        backgroundColor: 'rgba(0,0,0,0)'
    }
});
