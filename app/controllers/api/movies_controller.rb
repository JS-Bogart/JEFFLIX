class Api::MoviesController < ApplicationController

  def index
    if params[:user_id]
      @movies = Movie.joins(my_lists: :user).where(users: {id: params[:user_id]})
    elsif params[:genre_id]
      @movies = Movie.joins(movie_genres: :genre).where(genres: {id: params[:genre_id]})
    else
      @movies = Movie.all
    end
    render "api/movies/index"
  end

  def show
    @movie = Movie.find_by(id: params[:id])
    render "api/movies/show"
  end

  # def create
  #   @movie = Movie.new(movie_params)
  #   if @movie.save
  #   else
  #     render json: @movie.errors.full_messages, status: 401
  #   end
  # end

  # private

  # def movie_params
  #   params.require(:movie).permit(:title, :year, :synopsis)
  # end

end
