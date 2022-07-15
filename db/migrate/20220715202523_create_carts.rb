class CreateCarts < ActiveRecord::Migration[6.1]
  def change
    create_table :carts do |t|
      t.text :shipping_address
      t.decimal :shipping_cost
      t.decimal :quantity
      t.decimal :total
      t.string :payment_method
      t.integer :card_number

      t.timestamps
    end
  end
end
