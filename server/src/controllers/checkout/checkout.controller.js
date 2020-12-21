const CartModel = require("../../models/cart.model")
const OrderModel = require("../../models/order.model")
const SpecModel = require("../../models/specification.model")

const checkoutValidator = require("../../validators/checkout.validator")

/**
 * {
 *  order: {
 *    cart: {
 *      products: []
 *    }
 *  },
 *  name: '',
 *  address: ''
 * }
 *
 */

module.exports = async function checkoutController(req, res, next) {
  let order = req.user
    ? await CartModel.findOne({
        user: req.user.username,
      })
    : req.body.order

  if (!req.user) {
    if (!order)
      return res.status(400).json({
        success: false,
        message: "Missing order information.",
      })

    try {
      await checkoutValidator.validateAsync(order)
    } catch (err) {
      if (err.name === "ValidationError")
        return res.status(422).json({
          success: false,
          message: err.details[0].message,
        })
    }
  }

  const specs = await SpecModel.aggregate([
    {
      $match: {
        slug: {
          $in: order.cart.products.map((product) => product.slug),
        },
      },
    },
    {
      $project: {
        __v: 0,
      },
    },
    {
      $project: {
        _id: 0,
        slug: 1,
        price: 1,
        discount: 1,
      },
    },
  ])

  const orderProducts = specs.map((spec) => ({
    slug: spec.slug,
    price: (spec.price * (100 - spec.discount)) / 100,
    quantity: order.cart.products.find((product) => product.slug === spec.slug)
      .quantity,
  }))

  await OrderModel.create({
    products: orderProducts,
    name: order.name,
    address: order.address,
    phoneNumber: order.phoneNumber,
    user: req.user ? req.user.username : "GUEST",
  })

  return res.status(200).json({
    success: true,
    message: "Order has been created.",
  })
}
