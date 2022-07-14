class CreateDrugs < ActiveRecord::Migration[6.1]
  def change
    create_table :drugs do |t|
      t.string :brand_name
      t.string :generic_name
      t.integer :quantity
      t.text :description
      t.decimal :price

      t.timestamps
    end
  end
end
