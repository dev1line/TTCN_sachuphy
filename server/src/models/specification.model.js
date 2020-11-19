const mongoose = require("mongoose")

const { Schema } = mongoose

const SpecSchema = new Schema({
  name: {
    type: String,
  },
  manufacturer: {
    type: String,
    min: 1
  },
  color: {
    type: [String],
  },
  visibility: {
    type: String,
    default: 'public',
    enum: ['public', 'hidden']
  },
  processor: {
    type: String,
  },
  discount: {
    type: Number,
    min: 0,
    max: 100,
    default: 0
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
    type: Number,
    required: true,
  },
  images: [{ type: String }],
  created_at: {
    type: Date,
    default: Date.now
  }
})

const SpecModel = mongoose.model("Spec", SpecSchema)

module.exports = SpecModel
