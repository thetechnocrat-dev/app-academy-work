class CreateUsersTable < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :email, null: false
      t.string :password_digest, null: false
      t.string :session_token, null: false

      t.timestamp null: false
    end
    add_index :users, :email 
    add_index :users, :password_digest
    add_index :users, :session_token
  end
end
