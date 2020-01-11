class Answer < ApplicationRecord
    validates :user_id, :body, :question_id, presence: true

    belongs_to :user
    belongs_to :question
end
