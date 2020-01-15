class CreateDownvotes < ActiveRecord::Migration[5.2]
  def change
    create_table :downvotes do |t|
      t.integer :user_id, null: false
      t.integer :answer_id, null: false
      t.timestamps
    end

    add_index :downvotes, :user_id
    add_index :downvotes, [:answer_id, :user_id], unique: true
  end
end
