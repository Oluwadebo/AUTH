const mongoose = require('mongoose');
const { UserModel, SignupModel } = require('../model/model');
const cloudinary = require('cloudinary');
const bcrypt = require('bcrypt');

const regist = (req, res) => {
    const information = req.body;
    console.log(information);
    SignupModel.create(information, (err) => {
        if (err) {
            console.log(err);
        } else {
            res.send({ message: "saved", status: true })
        }
    })
}

const login = (req, res) => {
    const { email, password } = req.body;
    SignupModel.findOne({ email }, async (err, message) => {
        if (err) {
            res.send(err)
        } else {
            const validPassword = await bcrypt.compare(password, message.password);
            res.send(validPassword)
        }
    })
}

const display = (req, res) => {
    UserModel.find((err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
            res.send({ result })
        }
    })
}

const del = (req, res) => {
    let { id } = req.body;
    UserModel.findByIdAndDelete({ _id: id }, (err, result) => {
        if (err) {
            console.log(err);
        } else {
            console.log(result);
        }
    })
}

const file = (req, res) => {
    let userfile = req.body.file;
    cloudinary.v2.uploader.upload(userfile, { folder: "sqi" }, (err, result) => {
        if (err) {
            console.log(err);
            res.send({ message: "file fail to upload" })
        } else {
            const myimage = result.url;
            UserModel.create({ ...req.body, file: myimage }, (err) => {
                if (err) {
                    console.log(err);
                } else {
                    res.send({ message: "saved", status: true })
                }
            })
        }
    });
}

module.exports = { display, del, file, login, regist };