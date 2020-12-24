const checkoutController = require("../../../controllers/checkout/checkout.controller")

const optionalAuth = require("../../../middlewares/optionalAuth.middleware")

module.exports = function createCheckoutRouter(router) {
  router.post(
    "/checkout",
    [optionalAuth],
    checkoutController
  )
}
