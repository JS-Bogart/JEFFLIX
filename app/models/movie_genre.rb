class MovieGenre < ApplicationRecord

  validates :movie_id, :genre_id, presence: true, uniqueness: true

  belongs_to :movie

  belongs_to :genre

end
