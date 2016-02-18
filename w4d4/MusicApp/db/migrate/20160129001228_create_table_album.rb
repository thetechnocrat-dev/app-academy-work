class CreateTableAlbum < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.integer :track_id, null: false

      t.timestamps null: false
    end
    add_index :albums, :track_id
  end
end
