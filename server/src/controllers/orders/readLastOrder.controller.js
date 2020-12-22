const OrderModel = require("../../models/order.model")

module.exports = async function readLastOrderController(req, res, next) {
  const orders = await OrderModel.find({
    user: req.user.username,
  }).sort({
    ordered_at: -1,
  }).limit(1).select('-__v').lean()

  const order = orders[0]

  if (!order)
    return res.status(422).json({
      success: false,
      message: "You haven't ordered anything.",
    })

  return res.status(200).json({
    success: true,
    order,
  })
}
