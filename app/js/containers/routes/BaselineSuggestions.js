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

export default class BaselineSuggestions extends Component {
    render() {
        return (<View></View>
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
