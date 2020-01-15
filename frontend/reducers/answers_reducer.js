import {
    RECEIVE_ALL_ANSWERS,
    RECEIVE_ANSWER,
    REMOVE_ANSWER,
} from '../actions/answer_actions';



const AnswersReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_ALL_ANSWERS:
            return action.answers;
        case RECEIVE_ANSWER:
            nextState[action.answer.id] = action.answer;
            return nextState;
        case REMOVE_ANSWER:
            delete nextState[action.answerId];
            return nextState;
        default:
            return state;
    }
}

export default AnswersReducer;