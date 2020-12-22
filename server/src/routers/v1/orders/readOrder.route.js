const readOrderController = require("../../../controllers/orders/readOrder.controller")

const optionalAuthMiddleware = require("../../../middlewares/optionalAuth.middleware")

module.exports = function readOrderRoute(router) {
  router.get("/order/:orderId?", [optionalAuthMiddleware], readOrderController)
}
