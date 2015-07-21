# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' ,  name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

pairs = Pair.create([{ food: 'Horse Meat', beer: 'Mead', beer_type: 'Strong Ale'}])

pairs2 = Pair.create([{ food: 'Poached Egg', beer: "Woodhouse's Tears", beer_type: 'Blonde Ale'}])

pairs3 = Pair.create([{ food: 'Dirt', beer: 'Mud', beer_type: 'Porter'}])

pairs4 = Pair.create([{ food: 'Crumpets', beer: 'Tea', beer_type: 'Barley Wine'}])

pairs5 = Pair.create([{ food: 'Roast Beast', beer: 'Mead', beer_type: 'Strong Ale'}])

pairs6 = Pair.create([{ food: 'Salad', beer: 'Peter Cotton Ale', beer_type: 'Pale Ale'}])

pairs7 = Pair.create([{ food: 'Raw Steak', beer: 'Sex Panther', beer_type: 'Porter'}])