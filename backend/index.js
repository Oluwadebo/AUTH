const express = require("express");
const path = require('path');
const dotenv = require('dotenv')
const http = require("http");
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
const cloudinary = require('cloudinary')
const { Server } = require("socket.io");

const app = express();
dotenv.config();

const server = http.createServer(app)
const io = new Server(server, {
    cors: {
        origin: "*",
        methods: ['POST', 'PUT', 'GET']
    }
});

io.on("connection", (socket) => {
    console.log("User connected");
    console.log(socket.id);
    socket.on("send-user", (data) => {
        socket.emit("user-sent", data)
    })
})

const { display, del, file, regist, login, getTodo } = require("./control/controler");
const { checker } = require("./middleware/middleware");

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
app.get("/dashboard", display)
app.post("/gettodo", getTodo)
app.post("/files", file)
app.post("/del", del)

server.listen(5007, () => {
    console.log("Server started");
})