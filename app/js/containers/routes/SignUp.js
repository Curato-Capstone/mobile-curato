import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import SignUpForm from '../../components/forms/SignUpForm/SignUpForm.js';


export default class SignUp extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        return (
            <SignUpForm />
        );
    }
}
