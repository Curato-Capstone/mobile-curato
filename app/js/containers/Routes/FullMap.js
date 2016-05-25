import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import MapView from 'react-native-maps';

export default class FullMap extends Component {
    static defaultProps = {};
    props: { lat: number, lng: number };
    state : void;

    render() {
        const { lat, lng } = this.props;

        return (
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
        );
    }
}

const STYLES = StyleSheet.create({
    map: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0
    }
});
