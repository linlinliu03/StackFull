import Greeting from './greeting';
import { logout, clearErrors } from '../../actions/session_actions';
import {fetchQuestions} from '../../actions/question_actions';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentUser: state.entities.users[state.session.id]
})

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    resetError: () => dispatch(clearErrors()),
    fetchQuestions: (query) => dispatch(fetchQuestions(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(Greeting);