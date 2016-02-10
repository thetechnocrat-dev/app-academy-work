class DropAlbumTable < ActiveRecord::Migration
  def change
    drop_table :albums
  end
end
