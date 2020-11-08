const mongoose = require("mongoose")
const Schema = mongoose.Schema

const UserSchema = new Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
})

const bcrypt = require("bcrypt")

UserSchema.pre("save", async function (next) {
  this.password = await bcrypt.hash(this.password, 5)
  next()
})

const UserModel = mongoose.model("User", UserSchema)

module.exports = UserModel
