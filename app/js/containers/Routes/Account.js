import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    AsyncStorage
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { user as userActions } from '../../modules/index';
import AccountForm from '../../components/forms/AccountForm/AccountForm';
import { primaryColor } from '../../utils/colors';
import Button from '../../components/reusable/Button/Button';
import { Actions as routerActions } from 'react-native-router-flux';


class Account extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        const { actions } = this.props;

        return (
            <View style={STYLES.container}>
                <AccountForm onSubmit={() => actions.updateAccount() } />
                <Button
                    label="Sign Out"
                    handlePress={() => {
                        AsyncStorage.removeItem('accessToken');
                        routerActions.intro();
                    }}
                    raised
                    style={{ marginTop: 15 }}
                />
            </View>
        );
    }
}

const STYLES = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 100,
        alignSelf: 'stretch',
        alignItems: 'center'
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
