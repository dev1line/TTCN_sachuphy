const OrderModel = require("../../models/order.model")

module.exports = async function readOrderController(req, res, next) {
  const { orderId } = req.params

  if (orderId) {
    if (req.user && req.user.role === "admin") {
      const order = await OrderModel.findOne({
        order_id: orderId,
      })
        .select("-__v")
        .lean()

      return res.status(200).json({
        success: true,
        order,
      })
    }
    const order = await OrderModel.findOne({
      order_id: orderId,
      user: req.user ? req.user.username : "GUEST",
    })
      .select("-__v")
      .lean()

    if (!order)
      return res.status(404).json({
        success: false,
        message: "Order not found or not from guests.",
      })

    return res.status(200).json({
      success: true,
      order,
    })
  }

  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "You are not allowed to do that.",
    })
  }

  if (req.user && req.user.role === "admin") {
    const orders = await OrderModel.find().select("-__v").lean()

    return res.status(200).json({
      success: true,
      orders,
    })
  }

  const orders = await OrderModel.find({
    user: req.user.username,
  })
    .select("-__v")
    .lean()

  return res.status(200).json({
    success: true,
    orders,
  })
}
