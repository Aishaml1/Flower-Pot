import mongoose from 'mongoose'
const Schema = mongoose.Schema

const teaSchema = new Schema({
  tea: {type: String, 
      enum: ['Chamomile','Rose','Lavender','Hibiscus','Butterfly Pea', 'White', 'Green', 'Peppermint',]},
  
},{
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  tea:[teaSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}