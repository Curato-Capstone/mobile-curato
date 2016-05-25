import React, { Component } from 'react';
import {} from 'react-native';

import { Button as AndroidButton } from 'react-native-material-design';

export default class Button extends Component {
    static defaultProps = {
        disabled    : false
    };
    props: {
        label       : string,
        handlePress : (event: Object) => void,
        disabled    : boolean,
        style       : Object
    };
    state: void;
    render() {
        let { style, label, handlePress, disabled } = this.props;
        return (
            <AndroidButton
                overrides={style}
                text={label}
                onPress={handlePress}
                disabled={disabled}
            />
          );
    }
}
