import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";
import {fetchQuestions, 
        fetchQuestion, 
        createQuestion, 
        updateQuestion, 
        removeQuestion}
from "./util/question_api_util";


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
    window.getState = store.getState
    window.fetchQuestions = fetchQuestions
    window.fetchQuestion = fetchQuestion
    window.createQuestion = createQuestion
    window.updateQuestion = updateQuestion
    window.removeQuestion = removeQuestion
    //test end 
    const root = document.getElementById("root");
    ReactDOM.render(<Root store = {store} />, root);
});