const mongoose = require("mongoose")
const Schema = mongoose.Schema

const CartSchema = new Schema({
  products: [
    {
      slug: {
        type: String,
        required: true,
      },
      quantity: {
        type: Number,
        default: 1,
      },
    },
  ],
  user: {
    type: String,
    required: true,
  },
  updated_at: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const CartModel = mongoose.model("Cart", CartSchema)

module.exports = CartModel
