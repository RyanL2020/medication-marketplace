class Cart < ApplicationRecord
    belongs_to :user, optional: true
    belongs_to :drugs
end
