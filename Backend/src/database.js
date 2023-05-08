// npm run devStart

//const mongo = require('mongoose')
//const User = require("./User")
//const Post = require("./Post")
import mongoose from 'mongoose';
import User from './User.js';
import Post from './Post.js';
mongoose.connect("mongodb+srv://yangqingyun:yangqingyun@cluster0.jfjwpvr.mongodb.net/?retryWrites=true&w=majority")
//mongo.connect()

const addPost = async(user_name, start_date, end_date, price, description, email, city, state, zipCode)=>{
    const post = await Post.create({
        user_name: user_name,
        start_date:start_date,
        end_date: end_date,
        price:price,
        description:description,
        email:email,
        location: {
            city: city,
            state: state,
            zipCode: zipCode,
          },

    })
    return post
}


const addUser = async (nick_name, user_name, password, info) => {
    try {
        const user = await User.create({
            nick_name: nick_name,
            user_name: user_name,
            password: password,
            info: info,
            }
        )
        return user
    } catch(e) {
            console.log(e.message)
    }
}


// yh792
const getPostsByUserName = async(user_name) => {
    try{
        const post = await Post.find({user_name: user_name})
        return post
    }
    catch(e){
        console.log(e.message)
    }
}

// qny2
const getUserByUserNameAndPassword = async(_username,_password) => {
    try{
        const user = await User.findOne({user_name:_username, password:_password})
        return user
    }
    catch(e){
        console.log(e.message)
    }
}

const getUserbyUserName=async(username)=>{
    try{
        const user =  await User.findOne({user_name:username})
        return user
    }
    catch(e){
        console.log(e.message)
    }
}

// yh792
const getPostByLocation = async(city) => {
    try{
        const post = await Post.find({'location.city': city})
        //console.log(post)
        return post
    }
    catch(e){
        console.log(e.message)
    }
}

// tz275
const deletePostById = async(id) => {
    try {
        await Post.deleteOne({_id: id})
        const post = await Post.find({user_name: user_name})
        return post
    } catch (e) {
        console.log(e.message)
    }
}

const getPostById = async(id) => {
    try {
        return await Post.findOne({_id: id})
    }catch(e) {
        console.log(e.mssage)
    }
}

const getAllUsers = async() => {
    return await User.find()
}

const getAllPosts = async() => {
    return await Post.find()
}
const deleteAllPost = async() => {
    await Post.deleteMany({});
}
// test function

async function testFunction() {

    // addUser('nickname', 'username', 'password', 'info')
    // console.log(await getUserbyUserName('username'))
    // console.log(await getAllPosts())
    console.log(await getAllUsers())
    // console.log(await User.find())
    // console.log(await getUserByUserNameAndPassword("username", "password"))
    // await User.deleteMany({nick_name: 'nickname'})
    console.log("\n" + "Finished")    
}

testFunction()


// module.exports = {
//     addUser,
//     addPost,
//     getPostsByUserName,
//     getUserByUserNameAndPassword,
//     getUserbyUserName,
//     getPostByLocation,
//     deletePostById,
//     getPostById,
//     getAllPosts,
//     getAllUsers,
//     deleteAllPost
// }
export default {
    addUser,
    addPost,
    getPostsByUserName,
    getUserByUserNameAndPassword,
    getUserbyUserName,
    getPostByLocation,
    deletePostById,
    getPostById,
    getAllPosts,
    getAllUsers,
    deleteAllPost
}