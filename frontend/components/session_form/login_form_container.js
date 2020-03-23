import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';
import { clearErrors } from '../../actions/session_actions'

const mapStateToProps = (state, ownProps) => ({
    user: {
        username: "",
        password: ""
    },
    errors: state.errors.session,
    formType: 'Log in',
    formMessage: 'Please login!',
    change: 'Don’t have an account?',
    redirect: 'Sign up',
    Link: '/signup'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user)),
    login: (user) => dispatch(login(user)),
    resetError: () => dispatch(clearErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);