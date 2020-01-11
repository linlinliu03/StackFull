import QuestionSearch from './question_search';
import { connect } from 'react-redux';
import {fetchQuestions} from '../../actions/question_actions';


const mapStateToProps = (state,ownProps) => {
    return {
    questions: Object.values(state.entities.questions),
    query: ownProps.match.params.query, 
    url: ownProps.match.url 
}}

const mapDispatchToProps = dispatch => ({
    fetchQuestions: query => dispatch(fetchQuestions(query))
})


export default connect(mapStateToProps, mapDispatchToProps)(QuestionSearch);