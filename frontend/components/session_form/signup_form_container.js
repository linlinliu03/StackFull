import sessionForm from './session_form';
import { connect } from 'react-redux';
import { signup, login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: {
        username: "",
        email: "",
        password: ""
    },
    errors: state.errors.session,
    formType: 'Sign up',
    formMessage: 'Create your Stack Full account. It’s free and only takes a minute.',
    change: 'Already have an account?',
    redirect: 'Log in',
    Link: '/login'
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(signup(user)),
    login: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);