//const mongo = require('mongoose')
import mongoose from 'mongoose'
const userSchema = new mongoose.Schema({
    nick_name: {type: String, required: true},
    user_name: {type: String, required: true},
    password: {type: String, required: true},
    posts: [mongoose.SchemaTypes.ObjectId],
    info: String,
})

const User = mongoose.model("User", userSchema)
export default User