import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  user as userActions,
  suggestions as suggestionsActions
} from '../../modules/index';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';
import { preferencesInfo } from '../../utils/preferences.js';
import Slider from '../../components/reusable/Slider/Slider';

const preferencesList = ['art', 'history', 'food', 'outdoors',
    'entertainment', 'relaxation', 'shopping', 'sports'];

class PreferencesIntro extends Component {
    state = {
        prefIndex: 0,
        selectedPref: preferencesList[0]
    };

    renderCard(value) {
        const { preferences, actions } = this.props;
        const currPreference = preferencesInfo[value];

        const node = (
            <Card style={{ height: 135 }}>
                <Card.Body>
                    <Text
                        style={{
                            fontSize: 25,
                            marginBottom: 10,
                            color: currPreference.color,
                            fontFamily: 'Montserrat-Regular'
                        }}
                    >
                        {currPreference.name + " "}
                        <Icon name={currPreference.icon} size={25} />
                    </Text>
                    <Slider
                        value={preferences[currPreference.name.toLowerCase()]}
                        key={currPreference.name}
                        onValueChange={
                          (v) => {
                              actions.changePreference(
                                  currPreference.name.toLowerCase(), Math.round(v)
                              );
                          }
                        }
                        minimumTrackTintColor={currPreference.color}
                        thumbTintColor={currPreference.color}
                    />
                    <Text style={{ textAlign: 'center', fontFamily: 'Montserrat-Regular' }}>
                        {currPreference.tooltipValues[
                          preferences[currPreference.name.toLowerCase()] - 1
                        ]}
                    </Text>
                </Card.Body>
            </Card>
          );
        return node;
    }

    render() {
        let { selectedPref, prefIndex } = this.state;
        let preferenceCard = this.renderCard(selectedPref);
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={{paddingBottom: 10, marginHorizontal: 15}}>
                    <Card.Body>
                        <Text style={STYLES.header}>Set your preferences!</Text>
                        <Text style={{fontFamily: 'Montserrat-Regular'}}>
                            First, change these sliders to accurately represent how
                            much you like these different categories. We use these
                            values to help find businesses that you’re interested in,
                            and to also find other people like you who may have similar
                            interests.
                        </Text>
                    </Card.Body>
                    {preferenceCard}
                    <View
                        style={{
                            justifyContent: 'center',
                            flex: 1,
                            flexDirection: 'row'
                        }}
                    >
                        <Icon.Button
                            onPress={() => {
                                if (prefIndex !== 0) {
                                    this.setState({
                                        prefIndex: prefIndex - 1,
                                        selectedPref: preferencesList[prefIndex - 1]
                                    });
                                }
                            }}
                            name="arrow-left"
                            size={40}
                            color={prefIndex === 0 ? 'gray' : primaryColor}
                            backgroundColor="white"
                        />
                        <Text
                          style={{
                              marginTop: 15,
                              fontSize: 20,
                              marginRight: 10
                          }}
                        >
                          {(prefIndex + 1) + '/' + preferencesList.length}
                        </Text>
                        <Icon.Button
                            onPress={() => {
                                if (prefIndex < preferencesList.length - 1) {
                                    this.setState({
                                        prefIndex: prefIndex + 1,
                                        selectedPref: preferencesList[prefIndex + 1]
                                    });
                                }
                            }}
                            name="arrow-right"
                            size={40}
                            color={prefIndex === preferencesList.length  - 1 ? 'gray' : primaryColor}
                            backgroundColor="white"
                        />
                    </View>

                    <Button
                        raised
                        style={{
                            backgroundColor: primaryColor,
                            textColor: '#ffffff'
                        }}
                        label="GET YOUR SUGGESTIONS!"
                    />
                </Card>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10,
        fontFamily: 'Montserrat-Regular'
    }
});

function mapStateToProps(state) {
    return {
        preferences: state.getIn(['user', 'preferences']).toJS(),
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({
            ...userActions,
            ...suggestionsActions
        }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PreferencesIntro);
