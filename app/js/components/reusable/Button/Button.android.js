import React, { Component } from 'react';
import {} from 'react-native';

import { Button as AndroidButton } from 'react-native-material-design';
import { primaryColor } from '../../../utils/colors.js';

export default class Button extends Component {
    static defaultProps = {
        disabled    : false
    };
    props: {
        label       : string,
        handlePress : (event: Object) => void,
        disabled    : boolean,
        style       : Object,
        overrides   : Object
    };
    state: void;
    render() {
        let { style, label, handlePress, disabled, ...other} = this.props;

        return (
            <AndroidButton
                overrides={{
                    backgroundColor: primaryColor,
                    textColor: style ? (style.textColor ? style.textColor :
                                        '#ffffff') : '#ffffff'
                }}
                text={label}
                onPress={handlePress}
                disabled={disabled}
                {...other}
            />
          );
    }
}
