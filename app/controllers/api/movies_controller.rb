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

end
