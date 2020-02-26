import QuestionShow from './question_show';
import { connect } from 'react-redux';
import { fetchAnswers, createAnswer, updateAnswer} from '../../actions/answer_actions';
import {updateQuestion} from '../../actions/question_actions';
import {createDownvote} from '../../actions/downvote_action';
import {createUpvote} from '../../actions/upvote_action';
import { fetchQuestions, fetchQuestion, deleteQuestion} from '../../actions/question_actions';
import {fetchUsers} from '../../actions/user_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state, ownProps) => {
    return {
    question: state.entities.questions[ownProps.match.params.questionId],
    answers: Object.values(state.entities.answers),
    users: state.entities.users,
    currentUser: state.entities.users[state.session.id],
    errors: state.errors.session
}}

const mapDispatchToProps = dispatch => ({
    fetchQuestions: () => dispatch(fetchQuestions()),
    fetchQuestion: questionId => dispatch(fetchQuestion(questionId)), 
    fetchAnswers:questionId => dispatch(fetchAnswers(questionId)),
    deleteQuestion: questionId => dispatch(deleteQuestion(questionId)),
    createAnswer: answer => dispatch(createAnswer(answer)),
    updateAnswer: answer => dispatch(updateAnswer(answer)),
    updateQuestion: question => dispatch(updateQuestion(question)),
    createDownvote: downvote => dispatch(createDownvote(downvote)),
    createUpvote: upvote => dispatch(createUpvote(upvote)),
    fetchUsers: () => dispatch(fetchUsers()),
    resetError: () => dispatch(clearErrors())
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionShow);