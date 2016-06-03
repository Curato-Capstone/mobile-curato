import React, { Component } from 'react';
import {
  NativeModules,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as routerActions } from 'react-native-router-flux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';

export default class Intro extends Component {
    render() {
        return (
            <View style={{flex: 1, justifyContent: 'center', backgroundColor: primaryColor}}>
                <Card style={STYLES.card}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                          style={STYLES.logo}
                          source={require('../../../images/logo/whitered.png')}/>
                    </View>
                    <Card.Body>
                        <Text style={STYLES.text}>
                            Welcome to Curato! Curato is a simple way to sift
                            through all the information out there to help you find
                            things to do. If you’re new, start by creating an
                            account so we can guide you through how to use Curato.
                        </Text>
                        <View style={STYLES.buttonContainer}>
                        <Button
                            raised
                            label="Sign up!"
                            handlePress={() => routerActions.prefIntro()}
                        />
                        </View>
                        <View style={STYLES.buttonContainer}>
                            <Button
                                raised
                                label="Already have an account?"
                                handlePress={() => routerActions.signin()}
                            />
                        </View>
                    </Card.Body>
                </Card>
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    card: {
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        paddingBottom: 10, marginHorizontal: 10
    },

    logo: {
        resizeMode: 'contain',
        height: 150,
        width: 350
    },
    buttonContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        height: 30,
        marginTop: 20
    },
    text: {
        fontFamily: 'Montserrat-Regular',
        marginBottom: 20,
        textAlign: 'center'
    }
});
