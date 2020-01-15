import {
    RECEIVE_DOWNVOTE
} from '../actions/downvote_action';



const DownvotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_DOWNVOTE:
            nextState[action.downvote.id] = action.downvote;
            return nextState;
        default:
            return state;
    }
}

export default DownvotesReducer;