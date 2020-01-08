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
import Home from "../components/home/home";
import { AuthRoute, ProtectedRoute, CustomizedRoute } from "../util/route_util";

const App = () => (
  <div>
    <header>
      <GreetingContainer />
      <Switch>
        <AuthRoute exact path="/login" component={LoginFormContainer} />
        <AuthRoute exact path="/signup" component={SignupFormContainer} />
        <CustomizedRoute exact path="/questions" component={QuestionsContainer} />
        <ProtectedRoute exact path="/questions/new" component={CreateQuestionContainer} />
        <AuthRoute exact path="/" component={Home} />
      </Switch>
    </header>
  </div>
);

export default App;