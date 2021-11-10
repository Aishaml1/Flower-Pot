import mongoose from 'mongoose'
const Schema = mongoose.Schema


const teaSchema = new Schema({
    teaName: {type: String, 
        enum: ['Chamomile', 'White', 'Green Tea', 'Peppermint', 'None']},
    
},{
    timestamps: true
})

const Tea = mongoose.model('Tea', teaSchema)

export{
    Tea
}