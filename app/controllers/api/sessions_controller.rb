class Api::SessionsController < ApplicationController
  
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/show"
    elsif !User.find_by(email: email)
      render json: ["Sorry, we can't find an account with this email address. 
                    Please try again or create a new account"], status: 401
    else
      render json: ["Incorrect password. Please try again"], status: 401
    end
  end

  def destroy
    @user = current_user
    if @user
      logout
      render "api/users/show"
    else
      render json: ["Not signed in"], status: 404
    end
  end

end
