const { reject } = require("lodash")
const CartModel = require("../../models/cart.model")
const SpecModel = require("../../models/specification.model")

const CartValidator = require("../../validators/cart.validator")

module.exports = async function updateCartController(req, res, next) {
  const cartPayload = req.body.cart

  if (!cartPayload) {
    return res.status(400).json({
      success: false,
      message: "Missing cart",
    })
  }

  try {
    await CartValidator.validateAsync(cartPayload)
  } catch (err) {
    if (err.name === "ValidationError")
      return res.status(422).json({
        success: false,
        message: err.details[0].message,
      })
  }

  await Promise.all(
    cartPayload.products.map((product) => {
      return new Promise(async (resolve) => {
        const existingProduct = await SpecModel.findOne({
          slug: product.slug,
          visibility: "public",
        })
        
        if (!existingProduct) {
          res.status(400).json({
            success: false,
            message: "Product slug not found.",
            slug: product.slug,
          })
          return reject()
        }

        return resolve()
      })
    })
  )

  const existingCart = await CartModel.exists({
    user: req.user.username,
  })

  if (!existingCart) {
    await CartModel.create({
      user: req.user.username,
      products: [],
    })
  }

  await CartModel.findOneAndUpdate(
    {
      user: req.user.username,
    },
    {
      ...cartPayload,
      updated_at: Date.now(),
    }
  )

  return res.status(200).json({
    success: true,
    cart: cartPayload,
  })
}
