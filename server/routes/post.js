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
    let {title,category,order,tag,intro,imgUrl,content} = req.body;
    console.log(title,category,order,tag,intro,imgUrl,content);
    const newPost = new Post({
        title:title,
        category:category,
        order:order,
        tag:tag,
        intro:intro,
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
        res.status(505).send(err);
    }
    //res.send("sfdsf");
})


router.get("/getPost/:category",(req,res) =>{
    let {category} = req.params;
    console.log(category)
    Post.find({category: category})
    .then(data =>{
        //console.log(data)
        res.send(data)
    })
    .catch(error =>{
        res.status(500).send(error)
    })
})

module.exports = router;