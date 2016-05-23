// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import autoCompleteTrie from '../../utils/trie';
import { primaryColor } from '../../utils/colors';

import AutoComplete from './AutoComplete';
import Button from '../reusable/Button/Button';

export default class SearchBar extends Component {
    static defaultProps = {
        handleChange: () => {},
        handleSubmit: () => {}
    };

    props: {
        value: string,
        handleChange: (value: string) => void,
        handleSubmit: () => void,
    };

    state = { focused: false };
    state : { focused: boolean };

    render () {
        const { value, handleChange } = this.props;

        let results = autoCompleteTrie.find(value) || [];

        if (results.length && results[0] === value) {
            results = results.slice(1);
        }

        return (
            <View style={STYLES.container}>
                {this.renderOverlay()}
                <View style={STYLES.searchBarContainer}>
                    <View style={STYLES.searchBarWrapper}>
                        <TextInput
                            ref="search"
                            style={STYLES.searchBar}
                            value={value}
                            autoFocus
                            onChangeText={(v) => handleChange(v)}
                            onFocus={() => this.setState({ focused: true })}
                            onBlur={() => this.setState({ focused: false })}
                            placeholder="Search for something to do!"
                        />
                    </View>
                    <TouchableOpacity style={STYLES.iconContainer}>
                        <Icon style={STYLES.icon} name="search" />
                    </TouchableOpacity>
                </View>
                <AutoComplete
                    searchTerm={value.toLowerCase()}
                    show={this.state.focused}
                    handleResultTap={(v) => handleChange(v)}
                    results={results}
                />
            </View>
        );
    }

    renderOverlay() {
        if (this.state.focused) {
            return <View style={STYLES.overlay} />;
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1
    },

    searchBarContainer: {
        flexDirection: 'row'
    },

    searchBarWrapper: {
        flex: 1,
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 10,
        marginRight: 10,
    },

    searchBar: {
        height: 50,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 20
    },

    iconContainer: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        marginRight: 5,
        borderRadius: 5
    },

    icon: {
        color: 'white',
        fontSize: 24
    },

    overlay: {
        position: 'absolute',
        flex: 1,
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: 'grey',
        opacity: 0.6,
        marginTop: -10
    }
});
