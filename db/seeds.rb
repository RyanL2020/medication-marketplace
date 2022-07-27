# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Drug.destroy_all
# Cart.destroy_all

2.times do
    User.create(first_name: Faker::Name.first_name, 
    last_name: Faker::Name.last_name,
    address: "123 springfield ave",
    password_digest: "password")
end 

24.times do 
    Drug.create(
    brand_name: Faker::Name.first_name,
    generic_name: "asprin",
    quantity: 10,
    description: "Cureall",
    price: 1.00
    )
end

puts "You got seeds!"