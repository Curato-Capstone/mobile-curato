import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableNativeFeedback
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class Intro extends Component {
    render() {
        return (
            <Card>
                <View style={{alignItems: 'center'}}>
                    <Image
                      style={STYLES.logo}
                      source={require('../../../images/logo/whitered.png')}/>
                </View>
                <Card.Body>
                    <Text>
                        Welcome to Curato! Curato is a simple way to sift
                        through all the information out there to help you find
                        things to do. If you’re new, start by creating an
                        account so we can guide you through how to use Curato.
                    </Text>
                    <View style={STYLES.buttonContainer}>
                    <Button
                        raised={true}
                        overrides={{
                            backgroundColor: primaryColor,
                            textColor: '#ffffff'
                        }}
                        text="Sign up!"
                    />
                    </View>
                    <View style={STYLES.buttonContainer}>
                        <Button
                            raised={true}
                            overrides={{
                                backgroundColor: primaryColor,
                                textColor: '#ffffff'
                            }}
                            text="Already have an account?"
                        />
                    </View>
                </Card.Body>
            </Card>
          );
    }
}

const STYLES = StyleSheet.create({
  logo: {
      resizeMode: 'center',
      height: 150,
      width: 400
  },
  buttonContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      height: 30,
      marginTop: 20
  }
})
