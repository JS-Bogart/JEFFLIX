class CreateMovieGenres < ActiveRecord::Migration[5.2]
  def change
    create_table :movie_genres do |t|
      t.references :movie, index: true, foreign_key: true
      t.references :genre, index: true, foreign_key: true
      t.timestamps
    end
  end
end
