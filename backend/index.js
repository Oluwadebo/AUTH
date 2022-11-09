const express = require("express");
const dotenv = require('dotenv')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require('path');
const cloudinary = require('cloudinary')
const app = express();
const { display, del, file, regist, login } = require("./control/controler");
const upload = multer({ dest: './images' })
dotenv.config();
app.use(bodyParser.json({ limit: "50mb" }))
app.use(bodyParser.urlencoded({ extended: true, limit: "50mb" }))
app.use(cors())
app.use(express.json())

mongoose.connect(process.env.URI, { useNewUrlParser: true, useUnifiedTopology: true, }).then((res) => {
    console.log("connected successfuly")
}).catch(err => {
    console.log(err);
})

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET
});

app.post("/signup", regist)
app.post("/signin", login)
app.get("/display", display)
app.post("/files", file)
app.post("/del", del)

app.listen(5007, () => {
    console.log("Server started");
})