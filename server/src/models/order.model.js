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
  },
  address: {
    type: String,
  },
  user: {
    type: String,
  },
  ordered_at: {
    type: Date,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const OrderModel = mongoose.model("Order", OrderSchema)

module.exports = OrderModel
