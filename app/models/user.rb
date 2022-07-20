class User < ApplicationRecord
    # has_secure_password
    has_one :cart
    has_many :drugs, through: :cart
end
