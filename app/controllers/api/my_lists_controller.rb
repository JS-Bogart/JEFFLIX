class Api::MyListsController < ApplicationController

  def index
    @my_list = MyList.where(user_id: params[:user_id])
    render "api/my_lists/show"
  end

  def create
    @my_list = MyList.new(my_list_params)
    if @my_list.save
    else
      render json: @my_list.errors.full_messages, status: 401
    end
  end

  def delete
    @my_list = MyList.find_by(id: params[:id])
    @my_list.destroy!
  end

  private

  def my_list_params
    params.require(:my_list).permit(:user_id, :movie_id)
  end

end
