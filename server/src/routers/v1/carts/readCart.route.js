const authMiddleware = require("../../../middlewares/auth.middleware")

const readCartController = require("../../../controllers/carts/readCart.controller")

module.exports = function readCartRoute(router) {
  router.get("/cart", [authMiddleware], readCartController)
}
