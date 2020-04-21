import * as QuestionApiUtil from "../util/question_api_util";

export const RECEIVE_ALL_QUESTIONS = "RECEIVE_ALL_QUESTIONS";
export const RECEIVE_QUESTION = "RECEIVE_QUESTION";
export const REMOVE_QUESTION = "REMOVE_QUESTION";
export const RECEIVE_QUESTION_ERRORS = "RECEIVE_QUESTION_ERRORS";

export const receiveQuestionErrors = errors => ({
    type: RECEIVE_QUESTION_ERRORS,
    errors
})

export const receiveAllQuestions = questions => ({
    type: RECEIVE_ALL_QUESTIONS,
    questions
})

export const receiveQuestion = question => ({
    type: RECEIVE_QUESTION,
    question
})

export const removeQuestion = questionId => ({
    type: REMOVE_QUESTION,
    questionId
})

export const fetchQuestions = query => dispatch => (
    QuestionApiUtil.fetchQuestions(query)
    .then(questions => dispatch(receiveAllQuestions(questions)))
)

export const fetchQuestion = questionId => dispatch => {
    return QuestionApiUtil.fetchQuestion(questionId).then(question => { 
        return dispatch(receiveQuestion(question))
    }).fail(err => {
        return err; 
    })
}

export const createQuestion = question => dispatch => (
    QuestionApiUtil.createQuestion(question)
    .then(question => dispatch(receiveQuestion(question)),
        err => (
            dispatch(receiveQuestionErrors(err.responseJSON))
        ))
);

export const updateQuestion = question => dispatch => (
    QuestionApiUtil.updateQuestion(question)
    .then(question => dispatch(receiveQuestion(question)),
    err => (
        dispatch(receiveQuestionErrors(err.responseJSON))
    ))
);

export const deleteQuestion = questionId => dispatch => (
    QuestionApiUtil.deleteQuestion(questionId)
    .then(() => dispatch(removeQuestion(questionId)))
)