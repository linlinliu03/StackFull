class Question < ApplicationRecord
    validates :user_id, :title, :body, presence: true

    belongs_to :user
end
