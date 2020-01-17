export const createDownvote = downvote => (
    $.ajax({
        method: 'POST',
        url: 'api/downvotes',
        data: { downvote }
    })
)

