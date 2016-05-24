import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignInForm from '../../components/forms/SignInForm/SignInForm.js';


export default class SignIn extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        return (
            <SignInForm />
        );
    }
}
