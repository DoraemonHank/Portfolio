const router = require("express").Router();
const Post = require("../models").postModel;

router.use((req,res,next) =>{
    console.log("A request is coming in to post.js");
    next();
});

router.get("/testAPI",(req,res) =>{
    const msgOBJ = {
        message: "Test API is working"
    };
    return res.json(msgOBJ);
});

router.post("/post",async (req,res) =>{
    let {title,category,order,tag,imgUrl,content} = req.body;
    console.log(title,category,order,tag,imgUrl,content);
    const newPost = new Post({
        title:title,
        category:category,
        order:order,
        tag:tag,
        imgUrl:imgUrl,
        content:content
    });

    try{
        const savePost = await newPost.save();
        res.status(200).send({
            msg:"success",
            saveObject:savePost
        })
    }
    catch(err){
        res.status(200).send(err);
    }
    //res.send("sfdsf");
})

module.exports = router;