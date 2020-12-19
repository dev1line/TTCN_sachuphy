const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ImageSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  originalName: {
    type: String,
    required: true
  },
  created_at: {
    type: Date,
    default: Date.now
  }
})

const ImageModel = mongoose.model("Image", ImageSchema)

module.exports = ImageModel
