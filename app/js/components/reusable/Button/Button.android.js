import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ProgressBarAndroid
} from 'react-native';

import { Button as AndroidButton } from 'react-native-material-design';

export default class Button extends Component {
    render () {
        return <AndroidButton {...this.props} />
    }
}
