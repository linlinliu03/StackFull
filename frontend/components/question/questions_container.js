import QuestionsIndex from './questions_index';
import { connect } from 'react-redux';
import {fetchQuestions} from '../../actions/question_actions';

const mapState = state => ({
    questions: Object.values(state.entities.questions),
    currentUser: state.entities.users[state.session.id]
})

const mapDispatch = dispatch => ({
    fetchQuestions: query => dispatch(fetchQuestions(query))
})


export default connect(mapState, mapDispatch)(QuestionsIndex);