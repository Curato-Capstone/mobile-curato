import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  Platform,
  TouchableOpacity
} from 'react-native';

import { Card } from 'react-native-material-design';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../Button/Button';

export default class PlaceCard extends Component {
    render() {
        const { place } = this.props;

        let actionButtons;

        if (Platform.OS === 'ios') {
            actionButtons = (
                <Card.Actions>
                    <TouchableOpacity style={{ justifyContent: 'center', margin: 15, marginLeft: 30, marginRight: 70 }}>
                        <Icon name="heart" size={20}/>
                    </TouchableOpacity>
                    <TouchableOpacity style={{ justifyContent: 'center', margin: 15}}>
                        <Text style={{ color: '#ff0000', fontWeight: 'bold', fontFamily: 'Montserrat-Regular' }}>
                            I don't like this
                        </Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            margin: 15,
                            marginRight: 50,
                            marginLeft: 60
                        }}
                    >
                        <Text style={{ color: '#0000ff', fontWeight: 'bold', fontFamily: 'Montserrat-Regular' }}>
                            ...more
                        </Text>
                    </TouchableOpacity>
                </Card.Actions>
            );
        } else {
            actionButtons = (
                <Card.Actions>
                    <TouchableOpacity
                        style={{
                            justifyContent: 'center',
                            margin: 15,
                            marginLeft: 30,
                            marginRight: 60
                        }}
                    >
                        <Icon name="heart" size={20} />
                    </TouchableOpacity>
                    <Button style={{ textColor: '#ff0000' }} label="I don't like this" />
                    <Button label="...more" />
                </Card.Actions>
            );
        }

        return (
            <View>
                <Card height={300}>
                    <View style={{ alignItems: 'center' }} >
                        <Image source={place.image} style={{ height: 200, width: 350 }} />
                    </View>
                    <Card.Body>
                        <Text style={{fontFamily: 'Montserrat-Regular'}}>{place.name}</Text>
                    </Card.Body>
                    {actionButtons}
                </Card>
            </View>
      );
    }
}
