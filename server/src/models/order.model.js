const mongoose = require("mongoose")
const Schema = mongoose.Schema

const OrderSchema = new Schema({
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
      price: {
        type: Number
      }
    },
  ],
  name: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  user: {
    type: String,
  },
  ordered_at: {
    type: Date,
    required: true,
    default: Date.now
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const OrderModel = mongoose.model("Order", OrderSchema)

module.exports = OrderModel
