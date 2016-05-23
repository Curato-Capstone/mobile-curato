// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

export default class AutoComplete extends Component {
    static defaultProps = {};
    props: {
        show: boolean,
        handleResultTap: () => void,
        selected: number,
        results: Array<string>
    };
    state : void;

    render () {
        const { show, results, handleResultTap } = this.props;

        return (
            <View style={[STYLES.autoComplete, results.length && show ? {} : STYLES.hide]}>
                {results.map((result) => (
                    <TouchableOpacity key={result} onPress={() => handleResultTap(result)}>
                        <Text style={STYLES.text}>{result}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    autoComplete: {
        marginLeft: 10,
        marginRight: 10,
        marginTop: 7,
        padding: 6,
        backgroundColor: 'white',
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2
    },

    hide: {
        padding: 0,
        margin: 0,
    },

    text: {
        fontSize: 20,
        padding: 4
    }
});
