import * as UpvoteApiUtil from "../util/upvote_api_util";


export const RECEIVE_UPVOTE = "RECEIVE_UPVOTE";
export const RECEIVE_UPVOTE_ERRORS = "RECEIVE_UPVOTE_ERRORS";


export const receiveUpvoteErrors = errors => ({
    type: RECEIVE_UPVOTE_ERRORS,
    errors
})

export const receiveUpvote = upvote => ({
    type: RECEIVE_UPVOTE,
    upvote
})


export const createUpvote = upvote => dispatch => (
    UpvoteApiUtil.createUpvote(upvote)
        .then(upvote => dispatch(receiveUpvote(upvote)),
            err => (
                dispatch(receiveUpvoteErrors(err.responseJSON))
            ))
);
