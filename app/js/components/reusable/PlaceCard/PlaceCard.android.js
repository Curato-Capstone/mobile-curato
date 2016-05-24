import React, { Component } from 'react';
import {
  Text,
  View,
  Image
} from 'react-native';

import { Card } from 'react-native-material-design';
import Button from '../Button/Button';

export default class PlaceCard extends Component {
    render() {
        let { place } = this.props;
        return (
            <View>
                <Card height={300}>
                    <View style={{ alignItems: 'center' }} >
                        <Image source={place.image} style={{ height: 200, width: 350 }} />
                    </View>
                    <Card.Body>
                        <Text>{place.name}</Text>
                    </Card.Body>

                    <Card.Actions position="right">
                        <Button overrides={{ textColor: '#ff0000' }} text="I don't like this"/>
                        <Button text="...more" />
                    </Card.Actions>
                </Card>
            </View>
      );
    }
}
