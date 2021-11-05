import mongoose from 'mongoose'
const Schema = mongoose.Schema

const teaSchema = new Schema({
    teaName:{ 
        type: String,
        enum: [test, test, test,test]
    }
},{
    timestamps: true
})

const Tea = mongoose.model('Tea', teaSchema)

export{
    Tea
}