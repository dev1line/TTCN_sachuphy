const CartModel = require("../../models/cart.model")
const SpecModel = require("../../models/specification.model")

const CartValidator = require("../../validators/cart.validator")

module.exports = async function readCartController(req, res, next) {
  const existingCart = await CartModel.exists({
    user: req.user.username,
  })

  if (!existingCart) {
    await CartModel.create({
      user: req.user.username,
      products: [],
    })
  }

  const cart = await CartModel.aggregate([
    {
      $match: {
        user: req.user.username,
      },
    },
    {
      $lookup: {
        from: "specs",
        localField: "products.slug",
        foreignField: "slug",
        as: "products",
      },
    },
    {
      $project: {
        __v: 0,
        "products.__v": 0,
        user: 0,
        created_at: 0,
      },
    },
  ])

  return res.status(200).json({
    success: true,
    cart: cart[0],
  })
}
