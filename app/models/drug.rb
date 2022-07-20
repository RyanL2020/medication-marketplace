class Drug < ApplicationRecord
    belongs_to :carts
    has_many :carts
end 