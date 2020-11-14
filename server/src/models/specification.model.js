const mongoose = require("mongoose")

const { Schema } = mongoose

const SpecSchema = new Schema({
  name: {
    type: String,
  },
  processor: {
    type: String,
  },
  model: {
    type: String
  },
  graphic_card: {
    type: String,
  },
  memory: [{ type: Object }],
  storage: [{ type: Object }],
  display: {
    type: Object,
  },
  description: {
    type: String
  },
  quantity: {
    type: Number,
    default: 1
  },
  features: [{ type: Object }],
  operating_system: [
    {
      type: String,
    },
  ],
  slug: {
    type: String,
    required: true
  },
  price: {
    type: [Number, String],
    required: true,
  },
  images: [{ type: String }],
})

const SpecModel = mongoose.model("Spec", SpecSchema)

module.exports = SpecModel
