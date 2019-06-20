import React from 'react';
import { connect } from 'react-redux';

import {login} from '../actions';

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    }
}

const mapStateToProps = state => ({
    error: state.error,
    loggingIn: state.loggingIn
})

export default connect(
    mapStateToProps,
    { login }
)(Login);