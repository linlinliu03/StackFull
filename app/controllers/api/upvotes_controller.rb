class Api::UpvotesController < ApplicationController
    def create     
        @upvote = Upvote.create(upvote_params)
        @upvote.user_id = current_user.id
        if @upvote.save 
          render :show
        else  
          render json: @upvote.errors.full_messages, status: 422
        end 
    end  

    def delete
        @upvote = Upvote.find_by(user_id:current_user.id, answer_id:params[:answerId])
        if @upvote
            @upvote.destroy
            render :show
        end
    end

    private 
    def upvote_params
        params.require(:upvote).permit(:answer_id)
    end
end
