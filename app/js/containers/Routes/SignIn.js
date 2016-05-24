import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Card } from 'react-native-material-design';
import Button from '../../components/reusable/Button/Button';
import { primaryColor } from '../../utils/colors.js';
import { Field, reduxForm } from 'redux-form/immutable';

const renderField = props => (
    <TextInput
        placeholder={props.placeholder}
        secureTextEntry={props.placeholder === 'Password'}
    />
);

class SignIn extends Component {
    static defaultProps = {};
    props: {};
    state : void;

    render() {
        return (
            <Card>
                <Card.Body>
                    <Text style={STYLES.header}>
                        Sign in to get your curated suggestions!
                    </Text>
                </Card.Body>

                <Field name="email" type="email" component={renderField} placeholder="Email"/>
                <Field name="age" type="number" component={renderField} placeholder="Password"/>

                <Button
                    raised
                    overrides={{
                        backgroundColor: primaryColor,
                        textColor: '#ffffff'
                    }}
                    text="SUBMIT"
                    onPress={() => console.log('hi?')}
                />
            </Card>
        );
    }
}

const STYLES = StyleSheet.create({
    header: {
        color: primaryColor,
        textAlign: 'center',
        fontSize: 40,
        fontWeight: 'bold',
        marginBottom: 10
    }
});

export default reduxForm({
  form: 'SignInForm',  // a unique identifier for this form
})(SignIn);

// function mapStateToProps(state, ownProps) {
//     return {
//         // user: state.get('user'),
//     };
// }
//
// function mapDispatchToProps(dispatch) {
//     return {
//         // actions : bindActionCreators({ ...userActions, ...suggestionsActions }, dispatch),
//     };
// }
//
// export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
