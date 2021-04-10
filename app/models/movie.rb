class Movie < ApplicationRecord

  validates :title, :year, :synopsis, :rating, presence: true

  has_many :movie_genres

  has_many :my_lists

  has_many :genres,
    through: :movie_genres,
    source: :genre

  has_many :users,
    through: :my_lists,
    source: :user

  has_one_attached :poster

  has_one_attached :trailer

  has_one_attached :trailer

end
