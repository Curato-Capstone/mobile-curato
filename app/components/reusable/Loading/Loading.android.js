import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ProgressBar
} from 'react-native';

export default class Loading extends Component {
    render () {
        return <ProgressBar animating />
    }
}
