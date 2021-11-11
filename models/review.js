import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    selectTea: {type: String, enum: ['Chamomile', 'White', 'Green', 'Peppermint', 'None']},
    rate: {type: Number, min:0, max:4},
    share: String,
    owner: { type: Schema.Types.ObjectId, 'ref': "Profile" }
}, {
    timestamps: true
})


const Reviews = mongoose.model('Reviews', reviewsSchema)
export {
    Reviews
}