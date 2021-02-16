class Movie < ApplicationRecord

  validates :title, :year, :synopsis, presence: true
  
end
