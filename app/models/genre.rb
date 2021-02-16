class Genre < ApplicationRecord

  validates :genre, presence: true

  has_many :movie_genres,
    class_name: :MovieGenre

  has_many :movies,
    through: :movie_genres,
    source: :movie

end
