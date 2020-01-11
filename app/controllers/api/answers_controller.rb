class Api::AnswersController < ApplicationController
    def index 
        @answers = Answer.find_by(question_id:params[:question_id])
        render :index 
    end 

    def create 
        @answer = Answer.create(answer_params)
        @answer.user_id = current_user.id 
        if @answer.save
            render :show 
        else 
            render json: @answer.errors.full_messages, status: 422  
        end
    end  

    def destroy
        @answer = Answer.find(params[:id])
    
        if @answer.destroy
          render :show
        else
          render json: @answer.errors.full_messages, status: 422
        end
    end

    private 
    def answer_params
        params.require(:answer).permit(:body, :question_id)
    end 
end
