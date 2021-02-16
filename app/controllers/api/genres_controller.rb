class Api::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render "api/genres/index"
  end

  def show
    @genre = Genre.find_by(id: params[:id])
    render "api/genres/show"
  end

  def create
    @genre = Genre.new(genre_params)
    if @genre.save
    else
      render json: @genre.errors.full_messages, status: 401
    end
  end

  private

  def genre_params
    params.require(:genre).permit(:genre)
  end

end
