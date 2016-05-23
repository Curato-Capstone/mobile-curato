// @flow
import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

import autoCompleteTrie from '../../utils/trie';

import AutoComplete from './AutoComplete';

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

    state : void;

    render () {
        const { value, handleChange } = this.props;

        let results = autoCompleteTrie.find(value) || [];

        if (results.length && results[0] === value) {
            results = results.slice(1);
        }

        return (
            <View>
                <View style={STYLES.searchBarWrapper}>
                    <TextInput
                        ref="search"
                        style={STYLES.searchBar}
                        value={value}
                        onChangeText={(v) => handleChange(v)}
                        placeholder="Search for something to do!"
                    />
                </View>
                <AutoComplete
                    searchTerm={value.toLowerCase()}
                    show={this.refs.search ? this.refs.search.isFocused() : true}
                    handleResultTap={(v) => handleChange(v)}
                    results={results}
                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    searchBarWrapper: {
        shadowColor: 'black',
        shadowOffset: {width: 2, height: 3},
        shadowOpacity: 0.25,
        shadowRadius: 2,
        elevation: 2,
        marginLeft: 10,
        marginRight: 10
    },

    searchBar: {
        height: 50,
        backgroundColor: 'white',
        paddingTop: 10,
        paddingBottom: 10,
        textAlign: 'center',
        fontSize: 20
    }
});
