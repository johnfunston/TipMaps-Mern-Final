import mongoose from 'mongoose'
import UserSchema from './User.js'

const ShiftSchema = new mongoose.Schema({
    createdBy: {
        type: String, required: true
    },
    attachedToLocation: {
        type: String, required: true
    }
})

export default mongoose.model('shift', ShiftSchema)