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

  const cartResult = await CartModel.aggregate([
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
        as: "populatedProducts",
      },
    },
    {
      $project: {
        __v: 0,
        "products.slug": 1,
        "products._id": 1,
        user: 0,
        created_at: 0,
      },
    },
  ])

  const cart = {
    updated_at: cartResult[0].updated_at,
    products: cartResult[0].products.map((product, index) => ({
      ...cartResult[0].populatedProducts[index],
      ...product,
    })),
  }

  return res.status(200).json({
    success: true,
    cart: cart,
  })
}
