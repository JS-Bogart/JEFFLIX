class RemoveIndexes < ActiveRecord::Migration[5.2]
  def change
    remove_index :movie_genres, name: "index_movie_genres_on_genre_id"
    remove_index :movie_genres, name: "index_movie_genres_on_movie_id"
  end
end
