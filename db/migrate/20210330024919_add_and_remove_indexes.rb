class AddAndRemoveIndexes < ActiveRecord::Migration[5.2]
  def change
    add_index :movie_genres, :movie_id
    add_index :movie_genres, :genre_id
    remove_index :my_lists, :user_id
    remove_index :my_lists, :movie_id
  end
end
