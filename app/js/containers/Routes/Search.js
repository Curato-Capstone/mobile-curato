import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { user as userActions, suggestions as suggestionsActions } from '../../modules/index';

import SearchBar from '../../components/search/SearchBar';

class Search extends Component {
    static defaultProps = {};
    props: { searchText: string, actions: Object };
    state: void;

    render() {
        const { searchText, actions } = this.props;

        return (
            <View style={STYLES.container}>
                <SearchBar
                    value={searchText}
                    handleChange={actions.changeSearchText}
                    handleSubmit={() => {}}
                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {

    }
});

function mapStateToProps(state, ownProps) {
    return {
        searchText: state.get('suggestions').toJS().searchText,
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch),
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
