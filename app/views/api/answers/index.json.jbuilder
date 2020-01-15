@answers.each do |answer|
    json.set! answer.id do 
        json.extract! answer, :id, :user_id, :body, :question_id, :upvote_ids, :downvote_ids
    end 
end 