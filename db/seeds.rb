# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)

Track.destroy_all

songs = Track.create([
  {artist: "Savatage", name: "Power of the Night"},
  {artist: "Savatage", name: "Sirens"},
  {artist: "Savatage", name: "Fight for the Rock"},
  {artist: "Savatage", name: "Hall of the Mountain King"},
  {artist: "Savatage", name: "Gutter Ballet"},
  {artist: "Queen", name: "Action This Day"},
  {artist: "Queen", name: "Bohemian Rhapsody"},
  {artist: "Queen", name: "Breakthru"},
  {artist: "Queen", name: "Crazy Little Thing Called Love"},
  {artist: "Queen", name: "Don't Stop Me Now"},
  {artist: "Queen", name: "Fat Bottomed Girls"},
  {artist: "Queen", name: "Flash's Theme"},
  {artist: "Queen", name: "Flick of the Wrist"},
  {artist: "Queen", name: "Get Down, Make Love"},
  {artist: "Queen", name: "I Want It All"},
  {artist: "Bon Jovi", name: "Livin' on a Prayer"},
  {artist: "Bon Jovi", name: "You Give Love a Bad Name"},
  {artist: "Bon Jovi", name: "Silent Night"},
  {artist: "Bon Jovi", name: "Wanted Dead or Alive"},
  {artist: "Bon Jovi", name: "Never Say Goodbye"},
  {artist: "Bon Jovi", name: "Bad Medicine"},
  {artist: "Bon Jovi", name: "Living in Sin"}
])
