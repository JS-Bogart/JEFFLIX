class MovieGenre < ApplicationRecord

  validates :movie_id, :genre_id, presence: true, uniqueness: true

  belongs_to :movie
    class_name: :Movie,
    foreign_key: :movie_id

  belongs_to :genre
    class_name: :Genre,
    foreign_key: :genre_id

end
