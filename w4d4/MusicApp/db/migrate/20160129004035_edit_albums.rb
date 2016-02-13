class EditAlbums < ActiveRecord::Migration
  def change
    remove_column :albums, :track_id
    add_column :albums, :band_id, :integer
    add_column :albums, :live, :boolean
    add_column :albums, :title, :string

    add_index :albums, :band_id
    add_index :albums, :title
  end
end
