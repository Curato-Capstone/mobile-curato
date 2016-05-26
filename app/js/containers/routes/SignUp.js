import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Actions as routerActions } from 'react-native-router-flux';

import SignUpForm from '../../components/forms/SignUpForm/SignUpForm.js';
import { auth as authActions } from '../../modules/index';


class SignUp extends Component {
    static defaultProps = {};
    props: { actions: Object };
    state : void;

    render() {
        return (
            <SignUpForm onSubmit={() => this.signUpUser()} />
        );
    }

    signUpUser() {
        const { actions } = this.props;

        actions.signUpUser()
            .then(() => {
                routerActions.search()
            });
    };
}

function mapStateToProps() {
    return {};
}

function mapDispatchToProps(dispatch) {
    return {
        actions : bindActionCreators({ ...authActions }, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
