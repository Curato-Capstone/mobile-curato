import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import PlaceCard from '../../components/reusable/PlaceCard/PlaceCard';


const place1 = {
    name: 'EMP',
    location: { address: '1234 Street Ave., Seattle, WA' },
    image: require('../../../images/places/pike_place_market.jpg'),
    id: '123',
    categories: [{ name: 'Art Museum' }, { name: 'History Museum' }]
};

const place2 = {
    name: 'Space Needle',
    location: { address: '1234 Street Ave., Seattle, WA' },
    image: require('../../../images/places/noodle.jpg'),
    id: '124',
    categories: [{ name: 'Landmark' }],
};

const place3 = {
    name: 'Pike Place Market',
    location: { address: '1234 Street Ave., Seattle, WA' },
    image: require('../../../images/places/pike_place_market.jpg'),
    id: '125',
    categories: [{ name: 'Shop' }],
};

const allPlaces = [place1, place2, place3];

export default class BaselineSuggestions extends Component {
    state = {
        suggIndex: 0
    };

    render() {
        let { suggIndex } = this.state;

        return (
            <Card>
                <Card.Body>
                    <Text style={STYLES.header}>Your Suggestions!</Text>
                    <Text>
                        These are the suggestions we came up with! If you like
                        it, tap on the heart to add it to your favorites. If
                        you don't, tap on "I don't like this", and you won't
                        see it suggested again. We use this information to
                        help give you even better suggestions in the future!
                    </Text>
                </Card.Body>
                <PlaceCard place={allPlaces[suggIndex]} />
                <View style={{justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
                    <Icon.Button
                        onPress={() => {
                            if (suggIndex !== 0) {
                              this.setState({
                                suggIndex: suggIndex - 1,
                              });
                            }
                        }}
                        name='arrow-left'
                        size={40}
                        color={suggIndex === 0 ? 'gray' : primaryColor}
                        backgroundColor='white'
                    />
                    <Icon.Button
                        onPress={() => {
                            if (suggIndex < allPlaces.length - 1) {
                              this.setState({
                                suggIndex: suggIndex + 1,
                              });
                            }
                        }}
                        name='arrow-right'
                        size={40}
                        color={suggIndex === allPlaces.length - 1? 'gray' : primaryColor}
                        backgroundColor='white'
                    />
                </View>

                <Button
                    raised={true}
                    overrides={{
                        backgroundColor: primaryColor,
                        textColor: '#ffffff'
                    }}
                    text="ONE LAST STEP!"
                />
            </Card>
        );
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    }
})
