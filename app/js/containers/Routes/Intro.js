import React, { Component } from 'react';
import {
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
                <Card style={{paddingBottom: 10, marginHorizontal: 10}}>
                    <View style={{ alignItems: 'center' }}>
                        <Image
                          style={STYLES.logo}
                          source={require('../../../images/logo/whitered.png')}/>
                    </View>
                    <Card.Body>
                        <Text style={{ fontFamily: 'Montserrat-Regular' }}>
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
    }
});
