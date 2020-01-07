import sessionForm from './session_form';
import { connect } from 'react-redux';
import { login } from '../../actions/session_actions';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = (state, ownProps) => ({
    user: {
        username: "",
        password: ""
    },
    errors: state.errors.session,
    formType: 'login',
    link: <Link to='/signup'>Sign UP Instead</Link>
})

const mapDispatchToProps = (dispatch, ownProps) => ({
    processForm: (user) => dispatch(login(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(sessionForm);