class Cart < ApplicationRecord
    belongs_to :user, optional: true
    has_and_belongs_to_many :drugs
    # belongs_to :user, optional: true
    # belongs_to :drugs
end
