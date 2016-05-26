// @flow
import React, { Component } from 'react';
import {
    StyleSheet,
    TextInput,
    TouchableOpacity,
    View,
    TouchableWithoutFeedback
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import dismissKeyboard from 'dismissKeyboard';

import autoCompleteTrie from '../../utils/trie';
import { primaryColor } from '../../utils/colors';

import AutoComplete from './AutoComplete';
import Overlay from './Overlay';
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

    render() {
        const { value, handleChange, handleSubmit } = this.props;

        let results = autoCompleteTrie.find(value) || [];

        if (results.length && results[0] === value) {
            results = results.slice(1);
        }

        return (
            <TouchableWithoutFeedback
                onPress={() => dismissKeyboard()}
            >
                <View style={STYLES.container}>
                    {this.renderOverlay()}
                    <View style={STYLES.searchBarContainer}>
                        <View style={STYLES.searchBarWrapper}>
                            <TextInput
                                ref="search"
                                style={STYLES.searchBar}
                                value={value}
                                onChangeText={(v) => handleChange(v)}
                                onFocus={() => this.setState({ focused: true })}
                                onBlur={() => this.setState({ focused: false })}
                                placeholder="Search for something to do!"
                            />
                        </View>
                        <TouchableOpacity style={STYLES.iconContainer} onPress={handleSubmit}>
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
            </TouchableWithoutFeedback>
        );
    }

    renderOverlay() {
        if (this.state.focused) {
            return <Overlay />;
        }
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 60,
        paddingTop: 10

    },

    searchBarContainer: {
        flexDirection: 'row'
    },

    searchBarWrapper: {
        flex: 1,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
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
        fontSize: 20,
        fontFamily: 'Montserrat-Light'
    },

    iconContainer: {
        flex: 0.17,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: primaryColor,
        shadowColor: 'black',
        shadowOffset: { width: 2, height: 3 },
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        marginRight: 5,
        borderRadius: 5
    },

    icon: {
        color: 'white',
        fontSize: 24
    }
});
