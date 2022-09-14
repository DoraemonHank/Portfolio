const router = require("express").Router();
const Contact = require("../models").contactModel;

router.use((req,res,next) =>{
    console.log("A request is coming in to contact.js");
    next();
});

router.post('/',(req,res) =>{
    let {name,tel,email,msg} = req.body;
    console.log(name,tel,email,msg);
    const newContact = new Contact({
        name:name,
        tel:tel,
        email:email,
        msg:msg
    });
    newContact.save()
    .then(() =>{
        res.status(200).send({
            msg:"success",
            saveObject:newContact
        })
    })
    .catch((e) =>{
        console.log(e)
        res.status(500).send("User not saved");
    })
})

module.exports = router;