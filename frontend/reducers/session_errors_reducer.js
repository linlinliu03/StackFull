import {
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {RECEIVE_QUESTION_ERRORS} from '../actions/question_actions';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};