export const fetchQuestions = query => (
    $.ajax({
        method: 'GET',
        url: 'api/questions',
        data: { query },
    })
)

export const fetchQuestion = questionId => {
    return $.ajax({
        method: 'GET',
        url: `api/questions/${questionId}`
    })
}

export const createQuestion = question => (
    $.ajax({
        method: 'POST',
        url: 'api/questions',
        data: {question}
    })
)

export const updateQuestion = question => (
    $.ajax({
        method: 'PATCH',
        url: `api/questions/${question.id}`,
        data: {question}
    })
)

export const deleteQuestion = questionId => (
    $.ajax({
        method: 'DELETE',
        url: `api/questions/${questionId}`
    })
)



