import mongoose from 'mongoose'
const Schema = mongoose.Schema


const teaSchema = new Schema({
    chamomile:'Boolean',
    white:'Boolean',
    greenTea:'Boolean',
    Peppermint: 'Boolean',
    
},{
    timestamps: true
})

const Tea = mongoose.model('Tea', teaSchema)

export{
    Tea
}