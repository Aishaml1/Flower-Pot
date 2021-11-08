import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reviewsSchema = new Schema({
    ownerOfReview: { type: Schema.Types.ObjectId, 'ref': "Profile" },
    selectTea:{
        type:String, 
        enum:['Chamomile','White tea','Green Tea','Peppermint','none']},
    like:{
        type:String },
    other:{
        type: String
    }
},{
    timestamps: true
})

const Reviews = mongoose.model('Reviews', reviewsSchema)
export{
    Reviews
}