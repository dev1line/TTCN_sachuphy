const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProductSchema = new Schema({
  default_spec: {
    type: mongoose.Types.ObjectId,
    ref: "Spec",
    required: true
  },
  options: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Spec"
    }
  ],
})

const ProductModel = mongoose.model("Product", ProductSchema)

module.exports = ProductModel
