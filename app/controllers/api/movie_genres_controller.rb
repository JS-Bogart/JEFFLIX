class Api::MovieGenresController < ApplicationController

  def create
    @movie_genre = MovieGenre.new(movie_genre_params)
    if @movie_genre.save
    else
      render json: @movie_genre.errors.full_messages, status: 401
    end
  end

  private

  def movie_genre_params
    params.require(:movie_genre).permit(:movie_id, :genre_id)
  end

end
