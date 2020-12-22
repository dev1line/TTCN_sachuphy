const readLastOrderController = require("../../../controllers/orders/readLastOrder.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")

module.exports = function readLastOrderRoute(router) {
  router.get("/last-order", [authMiddleware], readLastOrderController)
}
