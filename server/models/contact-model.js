const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    tel:{
        type: Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    msg:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("Contact",postSchema);