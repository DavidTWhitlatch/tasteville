# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Flavor.destroy_all
Food.destroy_all
User.destroy_all

@user = User.create!(username: 'Loon', email: 'loon@email.com', password: '123456')

puts "#{User.count} users created"

@salty = Flavor.create!(name: 'Salty')
@sweet = Flavor.create!(name: 'Sweet')
@sour = Flavor.create!(name: 'Sour')
@bitter = Flavor.create!(name: 'Bitter')
@umami = Flavor.create!(name: 'Umami')

puts "#{Flavor.count} flavors created"

@pizza = Food.create!(name: 'Pizza', user: @user)
@ice_cream = Food.create!(name: 'Ice Cream', user: @user)
@sushi = Food.create!(name: 'Sushi', user: @user, flavors: [@salty, @umami])
@tacos = Food.create!(name: 'Tacos', user: @user)

puts "#{Food.count} foods created"

@pizza.flavors.push(@salty, @sweet, @umami)
@ice_cream.flavors = [@sweet, @salty]
@tacos.flavors << @salty
@tacos.flavors << @umami
@tacos.flavors << @sour
@tacos.flavors << @sweet


