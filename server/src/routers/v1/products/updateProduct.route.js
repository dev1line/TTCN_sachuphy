const updateProductController = require("../../../controllers/products/updateProduct.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function updateProductRoute(router) {
  router.put(
    "/product/:productSlug",
    [authMiddleware, adminMiddleware],
    updateProductController
  )
}
