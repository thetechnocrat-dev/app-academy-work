class CreateBenches < ActiveRecord::Migration
  def change
    create_table :benches do |t|
      t.text :description, null: false
      t.float :lat, null: false
      t.float :lng, null: false

      t.timestamps null: false
    end
    add_index :benches, :lat
    add_index :benches, :lng
  end
end
