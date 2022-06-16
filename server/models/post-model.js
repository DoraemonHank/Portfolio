const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title:{
        type: String,
        required:true
    },
    category:{
        type: String,
        required:true
    },
    order:{
        type:Number,
        required:true
    },
    tag:{
        type: String,
        required:true
    },
    imgUrl:{
        type: String,
        required:true
    },
    content:{
        type:String,
        required:true
    },

})

module.exports = mongoose.model("Post",postSchema);