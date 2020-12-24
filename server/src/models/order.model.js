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
        type: Number,
      },
      detail: {
        type: Object,
      },
    },
  ],
  order_id: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  phone_number: {
    type: String,
    required: true,
  },
  user: {
    type: String,
  },
  ordered_at: {
    type: Date,
    required: true,
    default: Date.now,
  },
  created_at: {
    type: Date,
    default: Date.now,
  },
})

const OrderModel = mongoose.model("Order", OrderSchema)

module.exports = OrderModel
