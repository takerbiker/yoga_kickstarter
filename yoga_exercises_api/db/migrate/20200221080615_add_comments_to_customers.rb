class AddCommentsToCustomers < ActiveRecord::Migration[6.0]
  def change
    add_column :users, :comments_1, :string
  end
end
