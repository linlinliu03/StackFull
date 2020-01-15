class Api::DownvotesController < ApplicationController
    def create 
        @downvote = Downvote.create(downvote_params)
        @downvote.user_id = current_user.id 
        if @downvote.save
            render :show 
        else 
            render json: @downvote.errors.full_messages, status: 422  
        end
    end 

    private 
    def downvote_params
        params.require(:downvote).permit(:answer_id)
    end
end
