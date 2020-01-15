import {
    RECEIVE_SESSION_ERRORS,
    CLEAR_ERRORS,
    RECEIVE_CURRENT_USER,
} from '../actions/session_actions';

import {RECEIVE_QUESTION_ERRORS} from '../actions/question_actions';

import {RECEIVE_ANSWER_ERRORS} from '../actions/answer_actions';

import {RECEIVE_UPVOTE_ERRORS} from '../actions/upvote_action';

import {RECEIVE_DOWNVOTE_ERRORS} from '../actions/downvote_action';

export default (state = [], action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_SESSION_ERRORS:
            return action.errors;
        case RECEIVE_QUESTION_ERRORS:
            return action.errors;
        case RECEIVE_ANSWER_ERRORS:
            return action.errors;
        case RECEIVE_UPVOTE_ERRORS:
            return action.errors;
        case RECEIVE_DOWNVOTE_ERRORS:
            return action.errors;
        case RECEIVE_CURRENT_USER:
        case CLEAR_ERRORS:
            return [];
        default:
            return state;
    }
};