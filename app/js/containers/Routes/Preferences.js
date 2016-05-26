import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Platform
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../../components/reusable/Slider/Slider';
import Button from '../../components/reusable/Button/Button';
import { user as userActions } from '../../modules/index';
import { preferencesInfo } from '../../utils/preferences';

import { primaryColor } from '../../utils/colors';
import Icon from 'react-native-vector-icons/FontAwesome';


const prefKeys = ['art', 'entertainment', 'food', 'history', 'outdoors',
    'relaxation', 'shopping', 'sports'];

class Preferences extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        const { preferences, actions } = this.props;

        return (
            <ScrollView contentContainerStyle={STYLES.scrollContainer}>
                <View style={STYLES.container}>
                    { prefKeys.map(preference => {
                        const pref = preferencesInfo[preference];
                        const prefValue = preferences.get(pref.name.toLowerCase());
                        return (
                            <View key={pref.name} style={STYLES.sliderContainer}>
                                <Text style={STYLES.label(pref)}>
                                    {pref.name.charAt(0).toUpperCase() + pref.name.slice(1) + "  "}
                                    <Icon name={pref.icon} size={18} />
                                </Text>
                                <Slider
                                    value={prefValue}
                                    key={pref.name}
                                    onSlidingComplete={(value) => {
                                        actions.changePreference(
                                            pref.name.toLowerCase(), value
                                        );
                                    }}
                                    minimumTrackTintColor={pref.color}
                                    thumbTintColor={pref.color}
                                    style={STYLES.slider}
                                />
                                <Text style={STYLES.text}>
                                    {pref.tooltipValues[prefValue -  1]}
                                </Text>
                            </View>
                        );
                    })}

                    <View style={STYLES.buttonContainer}>
                        <Button
                            label="Update Preferences"
                            handlePress={() => actions.updatePreferences()}
                            style={Platform.OS === 'ios' ? STYLES.button : {}}
                            raised
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const STYLES = {
    scrollContainer: {
        height: 1350,
        marginTop: 70
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    sliderContainer: {
        alignItems: 'flex-start',
        backgroundColor: 'white',
        shadowOffset: {
            width: 1,
            height: 4
        },
        shadowRadius: 3,
        shadowColor: '#888888',
        shadowOpacity: 0.9,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 5,
        width: 280,
        height: 125
    },
    slider: {
        alignSelf: 'stretch'
    },
    label: (pref) => ({
        fontSize: 18,
        marginBottom: 10,
        color: pref.color,
        fontFamily: 'Montserrat-Light'
    }),
    text: {
        fontFamily: 'Montserrat-Regular'
    },
    button: {
        marginTop: 20
    }
};

function mapStateToProps(state) {
    return {
        preferences: state.getIn(['user', 'preferences'])
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...userActions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
