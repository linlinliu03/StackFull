import React from "react";
import { Provider } from 'react-redux';
import {
  Route,
  Redirect,
  Switch,
  Link,
  HashRouter
} from 'react-router-dom';
import GreetingContainer from "./greeting/greeting_container";
import LoginFormContainer from "../components/session_form/login_form_container";
import SignupFormContainer from "../components/session_form/signup_form_container";
import CreateQuestionContainer from "../components/question/create_question_container";
import QuestionsContainer from "../components/question/questions_container";
import UserContainer from "../components/user/user_container";
import QuestionShowContainer from "../components/question/question_show_container";
import QuestionSearchContainer from "../components/question/question_search_container"
import Home from "../components/home/home";
import { AuthRoute, ProtectedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <ProtectedRoute exact path="/questions" component={QuestionsContainer} />
        <ProtectedRoute exact path="/questions/new" component={CreateQuestionContainer} />
        <Route exact path="/users/:userId" component={UserContainer} />
        <Route exact path="/search/:query" component={QuestionSearchContainer} />
        <Route exact path="/questions/:questionId" component={QuestionShowContainer} />
        <AuthRoute exact path="/" component={Home} />
      </Switch>
    </header>
  </div>
);

export default App;