import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../../components/reusable/Slider/Slider';
import Button from '../../components/reusable/Button/Button';
import { user as userActions } from '../../modules/index';
import { preferencesInfo } from '../../utils/preferences';
import { primaryColor } from '../../utils/colors';


const prefKeys = ['art', 'entertainment', 'food', 'history', 'outdoors',
    'relaxation', 'shopping', 'sports'];

class Preferences extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        const { actions } = this.props;

        return (
            <ScrollView contentContainerStyle={STYLES.scrollContainer}>
                <View style={STYLES.container}>
                    { prefKeys.map(preference => {
                        let pref = preferencesInfo[preference];
                        return (
                            <View key={pref.name} style={STYLES.sliderContainer}>
                                <Text style={STYLES.text(pref)}>
                                    {pref.name.charAt(0).toUpperCase() + pref.name.slice(1)}
                                </Text>
                                <Slider
                                    value={3}
                                    handleChange={(value) => { console.log(pref.name, 'slider value:', value); }}
                                />
                            </View>
                        );
                    })}

                    <View style={STYLES.buttonContainer}>
                        <Button
                            label="Update Preferences"
                            handlePress={() => { console.log('updating prefs yo'); }}
                            style={STYLES.button}
                        />
                    </View>

                </View>
            </ScrollView>
        );
    }
}

const STYLES = {
    scrollContainer: {
        height: 830,
        marginTop: 70
    },
    container: {
        flex: 1,
        alignItems: 'center',
        alignSelf: 'stretch'
    },
    sliderContainer: {
        alignItems: 'center',
        backgroundColor: 'white',
        shadowOffset: {
            width: 2,
            height: 5
        },
        shadowRadius: 3,
        shadowColor: '#888888',
        shadowOpacity: 0.9,
        marginVertical: 10,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    text: (pref) => ({
        fontSize: 18,
        marginBottom: 10,
        color: pref.color
    }),
    button: {
        marginTop: 20
    }
};

function mapStateToProps(state) {
    return {
        preferences: state.getIn(['user', 'preferences']).toJS()
    };
}

function mapDispatchToProps(dispatch) {
    return {
        // actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Preferences);
