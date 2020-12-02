# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#


posts = Post.create([
  {
  name: "Karen",
  image_url: "https://latv.com/wp-content/uploads/2020/04/karen-meme-1.jpg"
  }
])

reviews = Review.create ([
  {
  title: 'Not a nice Person',
  description: 'Was mean to me.',
  score: 1,
  post: posts.first
  }
])