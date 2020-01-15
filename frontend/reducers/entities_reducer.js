import { combineReducers } from "redux";

import usersReducer from "./users_reducer";
import QuestionsReducer from "./questions_reducer";
import AnswersReducer from "./answers_reducer";
import UpvotesReducer from "./upvotes_reducer";
import DownvotesReducer from "./downvotes_reducer";


const entitiesReducer = combineReducers({
    users: usersReducer,
    questions: QuestionsReducer,
    answers: AnswersReducer,
    upvotes: UpvotesReducer,
    downvotes: DownvotesReducer
});

export default entitiesReducer;