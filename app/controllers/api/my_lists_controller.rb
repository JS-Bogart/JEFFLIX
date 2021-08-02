class Api::MyListsController < ApplicationController

  before_action :require_logged_in, only: [:show, :create, :destroy]

  def show
    @my_list = MyList.find_by(
      user_id: params[:user_id], 
      movie_id: params[:movie_id]
    )
    render "api/my_lists/show"
  end

  def create
    @my_list = MyList.new(my_list_params)
    @my_list.save!
  end

  def destroy
    @my_list = MyList.find_by(
      user_id: params[:user_id], 
      movie_id: params[:movie_id]
    )
    @my_list.destroy!
    render "api/my_lists/show"
  end

  private

  def my_list_params
    params.require(:my_list).permit(:user_id, :movie_id)
  end

end
