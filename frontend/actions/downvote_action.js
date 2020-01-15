import * as DownvoteApiUtil from "../util/downvote_api_util";


export const RECEIVE_DOWNVOTE = "RECEIVE_DOWNVOTE";
export const RECEIVE_DOWNVOTE_ERRORS = "RECEIVE_DOWNVOTE_ERRORS";

export const receiveDownvoteErrors = errors => ({
    type: RECEIVE_DOWNVOTE_ERRORS,
    errors
})

export const receiveDownvote = downvote => ({
    type: RECEIVE_DOWNVOTE,
    downvote
})


export const createDownvote = downvote => dispatch => (
    DownvoteApiUtil.createDownvote(downvote)
        .then(downvote => dispatch(receiveDownvote(downvote)),
            err => (
                dispatch(receiveDownvoteErrors(err.responseJSON))
            ))
);