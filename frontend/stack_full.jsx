import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {fetchQuestions, 
        fetchQuestion, 
        createQuestion, 
        updateQuestion, 
        deleteQuestion}
from "./actions/question_actions";
import { fetchAnswers } from "./util/answer_api_util";
// import {fetchAnswers} from "./actions/answer_actions";
import { createDownvote } from "./actions/downvote_action";
import { createUpvote} from "./actions/upvote_action";
import { fetchUsers } from "./actions/user_actions";
import { deleteUpvote } from "./util/upvote_api_util";



document.addEventListener("DOMContentLoaded", () => {
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    //test 
    window.dispatch = store.dispatch
    window.getState = store.getState
    window.fetchQuestions = fetchQuestions
    window.fetchQuestion = fetchQuestion
    window.createQuestion = createQuestion
    window.updateQuestion = updateQuestion
    window.deleteQuestion = deleteQuestion
    window.fetchAnswers = fetchAnswers
    window.createDownvote = createDownvote
    window.createUpvote = createUpvote
    window.fetchUsers = fetchUsers
    window.deleteUpvote = deleteUpvote
    //test end 
    const root = document.getElementById("root");
    ReactDOM.render(<Root store = {store} />, root);
});