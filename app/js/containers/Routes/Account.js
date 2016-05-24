import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { user as userActions } from '../../modules/index';
import AccountForm from '../../components/forms/AccountForm/AccountForm';


class Account extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        const { actions } = this.props;

        return (
            <View style={STYLES.container}>
                <AccountForm onSubmit={() => actions.updateAccount() } />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {

    }
});

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...userActions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Account);
