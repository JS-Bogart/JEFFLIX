class Movie < ApplicationRecord

  validates :title, :year, :synopsis, presence: true

  has_many :movie_genres

  has_many :genres,
    through: :movie_genres,
    source: :genre

  has_one_attached :poster

  has_one_attached :trailer

end
