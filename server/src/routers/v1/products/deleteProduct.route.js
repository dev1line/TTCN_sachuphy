const deleteProductController = require("../../../controllers/products/deleteProduct.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function deleteProductRoute(router) {
  router.delete(
    "/product/:productSlug",
    [authMiddleware, adminMiddleware],
    deleteProductController
  )
}
