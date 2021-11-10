import mongoose from 'mongoose'
const Schema = mongoose.Schema


const teaSchema = new Schema({
    teaName: {type: String, 
        enum: ['Chamomile', 'White', 'Green Tea', 'Peppermint', 'None']},
        ownerList: { type: Schema.Types.ObjectId, 'ref': "Profile" }
    
},{
    timestamps: true
})

const Tea = mongoose.model('Tea', teaSchema)

export{
    Tea
}