import {
    RECEIVE_UPVOTE
} from '../actions/upvote_action';



const UpvotesReducer = (state = {}, action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case RECEIVE_UPVOTE:
            nextState[action.upvote.id] = action.upvote;
            return nextState;
        default:
            return state;
    }
}

export default UpvotesReducer;