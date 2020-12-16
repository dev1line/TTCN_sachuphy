const authMiddleware = require("../../../middlewares/auth.middleware")

const updateCartController = require("../../../controllers/carts/updateCart.controller")

module.exports = function updateCartRoute(router) {
  router.put("/cart", [authMiddleware], updateCartController)
}
