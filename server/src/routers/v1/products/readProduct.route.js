const readProductController = require("../../../controllers/products/readProduct.controller")

const optionalAuth = require("../../../middlewares/optionalAuth.middleware")

module.exports = function createProductRoute(router) {
  router.get(
    "/product/:productSlug?",
    optionalAuth,
    readProductController
  )
}
