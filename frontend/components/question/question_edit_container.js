import QuestionEdit from './question_edit';
import { connect } from 'react-redux';
import { updateQuestion } from '../../actions/question_actions';
import { clearErrors } from '../../actions/session_actions';

const mapStateToProps = (state,ownProps) => ({
    errors: state.errors.session,
    question: state.entities.questions[ownProps.match.params.questionId]
})

const mapDispatchToProps = dispatch => ({
    resetError: () => dispatch(clearErrors()),
    updateQuestion: question => dispatch(updateQuestion(question))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionEdit);