import * as UserApiUtil from "../util/user_api_util";

export const RECEIVE_ALL_USERS = "RECEIVE_ALL_USERS";

export const receiveAllUsers = users => {
    // debugger; 
    return {
    type: RECEIVE_ALL_USERS,
    users
}}

export const fetchUsers = () => dispatch => {
    // debugger; 
    return UserApiUtil.fetchUsers()
        .then(users => { 
            // debugger; 
            return dispatch(receiveAllUsers(users)) 
        })
}