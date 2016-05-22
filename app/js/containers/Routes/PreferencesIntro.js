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
import { preferencesInfo } from '../../utils/preferences.js';
import Slider from 'react-native-slider';

export default class PreferencesIntro extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selected: 0,
        };
    }
    renderCards() {
        let cardNodes = [];
        for (let preference in preferencesInfo) {
            let currPreference = preferencesInfo[preference];
            let node = (
                <Card style={{height: 135}}>
                    <Card.Body>
                        <Text style={{
                                    fontSize: 25,
                                    marginBottom: 10,
                                    color: currPreference.color
                                }}>
                            {currPreference.name}
                            <Icon name={currPreference.icon} size={25}/>
                        </Text>
                        <Slider
                            maximumValue={5}
                            minimumValue={1}
                            step={0.1}
                            value={3}
                            onValueChange={(value) => {
                              let newState = Object.assign({}, this.state);
                              newState[currPreference.name + 'Text'] = currPreference.tooltipValues[Math.round(value) - 1];
                              this.setState(newState)
                            }}
                            minimumTrackTintColor={currPreference.color}
                            maximumTrackTintColor='#d3d3d3'
                            thumbTintColor={currPreference.color}
                        />
                        <Text style={{textAlign: 'center'}}>{this.state[currPreference.name + 'Text']}</Text>
                    </Card.Body>
                </Card>
            );

            cardNodes.push(node);
        }
        return cardNodes;
    }

    render() {
        console.log(this.statex);
        let { selected } = this.state;
        let preferenceCards = this.renderCards();
        return (
            <Card>
                <Card.Body>
                    <Text style={STYLES.header}>Set your preferences!</Text>
                    <Text>
                        First, change these sliders to accurately represent how
                        much you like these different categories. We use these
                        values to help find businesses that you’re interested in,
                        and to also find other people like you who may have similar
                        interests.
                    </Text>
                </Card.Body>
                {preferenceCards[selected]}
                <View style={{justifyContent: 'center', flex: 1, flexDirection: 'row'}}>
                    <Icon.Button
                        onPress={() => {
                            if (selected !== 0) {
                                this.setState({selected: selected - 1});
                            }
                        }}
                        name='arrow-left'
                        size={40}
                        color={selected === 0 ? 'gray' : primaryColor}
                        backgroundColor='white'
                    />
                    <Icon.Button
                        onPress={() => {
                            if (selected < preferenceCards.length - 1) {
                                this.setState({selected: selected + 1});
                            }
                        }}
                        name='arrow-right'
                        size={40}
                        color={selected === preferenceCards.length  - 1 ? 'gray' : primaryColor}
                        backgroundColor='white'
                    />
                </View>
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
