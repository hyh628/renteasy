//const mongo = require('mongoose')
import mongoose from 'mongoose'
const postSchema = new mongoose.Schema({
    user_name: {type: String, required: true},
    start_date: {type: Date, required: true},
    end_date: {type: Date, required: true},
    price: {type: Number, required: true},
    description: String,
    img_urls: [String],
    email: {type: String, required: true, lowercase: true},
    location: {
        city:{type:String, required:true,lowercase:true},
        state:String,
        zipCode: Number
    }
})

const Post = mongoose.model("Post", postSchema)
export default Post