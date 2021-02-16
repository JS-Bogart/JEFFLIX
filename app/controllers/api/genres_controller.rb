class Api::GenresController < ApplicationController

  def index
    @genres = Genre.all
    render "api/genres/index"
  end

  def show
    @genre = Genre.find_by(id: params[:id])
    render "api/genres/show"
  end

  private

  def genre_params
    params.require(:genre).permit(:genre)
  end

end
