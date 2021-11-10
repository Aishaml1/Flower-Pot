import mongoose from 'mongoose'
const Schema = mongoose.Schema


const teaSchema = new Schema({
  teaName: {type: String, 
      enum: ['Chamomile', 'White', 'Green Tea', 'Peppermint', 'None']},
  
},{
  timestamps: true
})

const profileSchema = new mongoose.Schema({
  name: String,
  avatar: String,
  teaList:[teaSchema]
}, {
  timestamps: true
})

const Profile = mongoose.model('Profile', profileSchema)

export {
  Profile
}