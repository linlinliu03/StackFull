class Downvote < ApplicationRecord
    validates :user_id, :answer_id, presence: true
    validates :answer_id, uniqueness: { scope: :user_id }

    belongs_to :user
    belongs_to :answer
end
