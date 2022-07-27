class CreateDrugCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :drug_carts do |t|
      t.integer :user_id
      t.integer :drug_id

      t.timestamps
    end
  end
end
