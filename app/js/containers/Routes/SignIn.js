import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as routerActions } from 'react-native-router-flux';

import SignInForm from '../../components/forms/SignInForm/SignInForm.js';
import { auth as authActions } from '../../modules/index';

class SignIn extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        const { actions } = this.props;

        return (
            <SignInForm onSubmit={() => this.signInUser()} />
        );
    }

    signInUser() {
        const { actions } = this.props;

        actions.signInUser()
            .then(() => {
                console.log('here bruh')
                routerActions.tabbar();
            });
    }
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...authActions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
