import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    selectTea: {type: String, enum: ['Chamomile', 'White tea', 'Green Tea', 'Peppermint', 'None']},
    like: String,
    other: String,
    owner: { type: Schema.Types.ObjectId, 'ref': "Profile" }
}, {
    timestamps: true
})


const Reviews = mongoose.model('Reviews', reviewsSchema)
export {
    Reviews
}