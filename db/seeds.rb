# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

User.destroy_all


  User.create!([
    {username:"Jen", email:"jen@gamil.com", password: 123456789},
    {username:"Pan", email:"pan@gamil.com", password: 1234567890},
    {username:"Lily", email:"lily@gamil.com", password: 1234567},
    {username:"Tom", email:"tom@gmail.com", password: 12345678900}])

end