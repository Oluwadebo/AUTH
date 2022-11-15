const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        school: String,
        file: String,
        userId: String,
    }
)

const SignupSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        email: {
            type: String,
            unique: true,
        },
        gender: String,
        password: String,
    }
)

SignupSchema.pre("save", async function (next) {
    let { password, email } = this;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    this.password = hashed;
    this.email = email.toLowerCase();
    next();
})

const UserModel = mongoose.model('User', UserSchema)
const SignupModel = mongoose.model('Signup', SignupSchema)

module.exports = { UserModel, SignupModel };