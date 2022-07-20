class AddDrugsIdToCarts < ActiveRecord::Migration[6.1]
  def change
    add_column :carts, :drug_id, :integer
  end
end
