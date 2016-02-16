class CreateAlbums < ActiveRecord::Migration
  def change
    create_table :albums do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
    add_index :albums, :name
  end
end
