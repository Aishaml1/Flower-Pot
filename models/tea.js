import mongoose from 'mongoose'
const Schema = mongoose.Schema


const teaSchema = new Schema({
    usersList: { type: Schema.Types.ObjectId, 'ref': "Profile" },
    teaName: { 
    type: Boolean,
    enum: ['Chamomile','White tea','Green Tea','Peppermint']},
    
},{
    timestamps: true
})

const Tea = mongoose.model('Tea', teaSchema)

export{
    Tea
}