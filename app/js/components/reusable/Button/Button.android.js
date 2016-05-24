import React, { Component } from 'react';
import {} from 'react-native';

import { Button as AndroidButton } from 'react-native-material-design';

export default class Button extends Component {
    render() {
        return <AndroidButton {...this.props} />;
    }
}
