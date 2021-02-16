class Api::MoviesController < ApplicationController

  def index
    @movies = Movie.all
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

  private

  def movie_params
    params.require(:movie).permit(:title, :year, :synopsis)
  end

end
