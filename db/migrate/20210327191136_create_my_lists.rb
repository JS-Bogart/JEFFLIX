class CreateMyLists < ActiveRecord::Migration[5.2]
  def change
    create_table :my_lists do |t|
      t.integer :user_id, null: false
      t.integer :movie_id, null: false
      t.timestamps
    end
    add_index :my_lists, :user_id, unique: true
    add_index :my_lists, :movie_id, unique: true
  end
end
