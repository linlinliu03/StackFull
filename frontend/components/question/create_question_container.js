import QuestionForm from './question_form';
import { connect } from 'react-redux';
import {createQuestion} from '../../actions/question_actions';

const mapStateToProps = state => ({
    errors: state.errors.session,
})

const mapDispatchToProps = dispatch => ({
    createQuestion: question => dispatch(createQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionForm);