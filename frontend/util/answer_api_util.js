export const fetchAnswers = questionId => (
    $.ajax({
        method: 'GET',
        url: 'api/answers',
        data: { questionId },
    })
)

export const createAnswer = answer => (
    $.ajax({
        method: 'POST',
        url: 'api/answers',
        data: { answer }
    })
)

export const updateAnswer = answer => (
    $.ajax({
        method: 'PATCH',
        url: `api/answers/${answer.id}`,
        data: { answer }
    })
)

export const deleteAnswer = answerId => (
    $.ajax({
        method: 'DELETE',
        url: `api/answers/${answerId}`
    })
)