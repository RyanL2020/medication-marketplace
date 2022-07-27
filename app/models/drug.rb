class Drug < ApplicationRecord

    has_many :users, through: :cart

    has_and_belongs_to_many :carts
    # belongs_to :cart
    # has_one :cart 
end 