import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import Slider from '../../components/reusable/Slider/Slider';
import Button from '../../components/reusable/Button/Button';
import { user as userActions } from '../../modules/index';
import { primaryColor } from '../../utils/colors';


const prefKeys = ['art', 'entertainment', 'food', 'history', 'outdoors',
    'relaxation', 'shopping', 'sports'];

class Preferences extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        const { preferences } = this.props;

        return (
            <View style={STYLES.container}>
                { prefKeys.map(pref => {
                    return (
                        <View key={pref} style={STYLES.sliderContainer}>
                            <Text style={STYLES.text}>{pref.charAt(0).toUpperCase() + pref.slice(1)}</Text>
                            <Slider
                                value={preferences[pref]}
                                handleChange={(value) => { console.log(pref, 'slider value:', value); }}
                            />
                        </View>
                    );
                })}

                <Button
                    label="Update Preferences"
                    handlePress={() => { console.log('updating prefs yo'); }}
                    style={STYLES.button}
                />

            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        marginTop: 70,
        flex: 1,
        justifyContent: 'space-around',
        flexDirection: 'row',
        alignItems: 'center',
        alignSelf: 'stretch',
        flexWrap: 'wrap'
    },
    sliderContainer: {
        justifyContent: 'space-around',
        alignItems: 'flex-start',
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
    text: {
        color: primaryColor
    },
    button: {
        marginTop: 20
    }
});

function mapStateToProps(state, ownProps) {
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
