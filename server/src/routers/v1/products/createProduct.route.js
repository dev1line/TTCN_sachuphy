const createProductController = require("../../../controllers/products/createProduct.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function createProductRoute(router) {
  router.post(
    "/product",
    [authMiddleware, adminMiddleware],
    createProductController
  )
}
