class Api::MyListsController < ApplicationController

  skip_before_action :verify_authenticity_token

  def create
    @my_list = MyList.new(my_list_params)
    @my_list.save!
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
