const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = new mongoose.Schema(
    {
        firstname: String,
        lastname: String,
        school: String,
        file: String,
        password: String,
    }
)

UserSchema.pre("save", async function (next) {
    let { password } = this;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    this.password = hashed;
    next();
})

const UserModel = mongoose.model('User', UserSchema)

module.exports = UserModel;