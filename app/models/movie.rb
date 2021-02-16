class Movie < ApplicationRecord

  validates :title, :year, :synopsis, presence: true

  has_many :movie_genres,
    class_name: :MovieGenre

  has_many :genres,
    through: :movie_genres,
    source: :genre

end
