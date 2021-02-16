class Genre < ApplicationRecord

  validates :genre, presence: true

  has_many :movie_genres

  has_many :movies,
    through: :movie_genres,
    source: :movie

end
