import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid
} from 'react-native';

export default class Loading extends Component {
    render () {
        return <ProgressBarAndroid animating />
    }
}
