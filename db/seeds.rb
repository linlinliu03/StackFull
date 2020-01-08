# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

ActiveRecord::Base.transaction do

User.destroy_all
Question.destroy_all

  Jen = User.create!({username:"Jen", email:"jen@gamil.com", password: 123456789})
  Pan = User.create!({username:"Pan", email:"pan@gamil.com", password: 1234567890})
  Lily = User.create!({username:"Lily", email:"lily@gamil.com", password: 1234567})
  Tom = User.create!({username:"Tom", email:"tom@gmail.com", password: 12345678900})


  question1 = Question.create({user_id: Tom.id, title: "What do these three dots in React do?", body: "What does the ... do in this React (using JSX) code and what is it called?"})
  question2 = Question.create({user_id: Lily.id, title: "Cannot Call Mixin Function from Initialize - Ruby", body: "I have a class called Amazon. When I instantiate that class I try to call a block function that I have in an helper function that I extended in my class. When I call this function from within the initialize function, I get the error: undefined method 'api_caller' for Class:Class. When I call the function outside of the initialize function everything works as expected. I assume this has something to do with the way objects are built in Ruby but I don't know how to get around the error."})
  question3 = Question.create({user_id: Pan.id, title: "Changing a MongoDB query into a Postgres query in Javascript", body: "I'm having a challenge converting this query. I have had success with others but this one combines multiple fields and I need some help. This is to get the dates to create a reservation."})
  question4 = Question.create({user_id: Jen.id, title: "How to dispatch a Redux action with a timeout?", body: "I have an action that updates notification state of my application. Usually, this notification will be an error or info of some sort. I need to then dispatch another action after 5 seconds that will return the notification state to initial one, so no notification. The main reason behind this is to provide functionality where notifications disappear automatically after 5 seconds. I had no luck with using setTimeout and returning another action and can't find how this is done online. So any advice is welcome."})

end