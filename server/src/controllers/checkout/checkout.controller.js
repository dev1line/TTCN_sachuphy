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
  let order = req.body.order

  const userCart = req.user
    ? await CartModel.findOne({
        user: req.user.username,
      })
    : null

  order.cart = req.user ? userCart : order.cart

  if (!order.cart || !order.cart.products || !order.cart.products.length) {
    return res.status(400).json({
      success: false,
      message: "Missing cart products",
    })
  }

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
        visibility: "public",
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
        name: 1,
        images: 1,
      },
    },
  ])

  if (specs.length !== order.cart.products.length) {
    return res.status(422).json({
      success: false,
      message: "Please check again your cart, some product does not exist.",
    })
  }

  const orderProducts = specs.map((spec) => ({
    slug: spec.slug,
    price: (spec.price * (100 - spec.discount)) / 100,
    quantity: order.cart.products.find((product) => product.slug === spec.slug)
      .quantity,
    detail: {
      name: spec.name,
      images: spec.images,
    },
  }))

  const resultOrder = await OrderModel.create({
    products: orderProducts,
    name: order.name,
    address: order.address,
    phoneNumber: order.phoneNumber,
    user: req.user ? req.user.username : "GUEST",
  })

  const sanitizedResultOrder = sanitizeResultOrder(resultOrder.toObject())

  if (req.user) {
    await userCart.updateOne({
      products: []
    })
  }

  return res.status(200).json({
    success: true,
    message: "Order has been created.",
    order: sanitizedResultOrder,
  })
}

function sanitizeResultOrder(order) {
  const { __v, _id, ...returnOrder } = order
  return returnOrder
}
