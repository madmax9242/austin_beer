class CreatePairs < ActiveRecord::Migration
  def change
    create_table :pairs do |t|
      t.integer :user_id
      t.string :food
      t.string :beer
      t.string :beer_type
    end
    add_foreign_key :pairs, :users
    add_index :pairs, :beer_type
  end
end
