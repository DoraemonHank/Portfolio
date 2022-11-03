const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const postRoute = require("./routes").post;
const imgRoute = require("./routes").image;
const contactRoute = require('./routes').contact;
const cors = require("cors");

// connect to DB
mongoose.connect(process.env.DB_CONNECT,
    {
        useNewUrlParser : true,
        useUnifiedTopology : true
    }  
).then(() =>{
    console.log("Connect to Mongo Altas");
}).catch((e) =>{
    console.log(e);
});

// middleware
app.use(express.json());
app.use(express.urlencoded({extended : true}));
app.use(cors());
app.use("/api/user",postRoute);
app.use("/api/img",imgRoute);
app.use("/api/contact",contactRoute);

const port = process.env.PORT || 8080;

app.listen(port,() =>{
    console.log("Server running on port " + port);
});