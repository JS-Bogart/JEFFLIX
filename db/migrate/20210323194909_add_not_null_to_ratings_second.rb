class AddNotNullToRatingsSecond < ActiveRecord::Migration[5.2]
  def change
    change_column_null :movies, :rating, false
  end
end
