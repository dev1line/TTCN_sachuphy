const createProductOptionController = require("../../../controllers/products/createProductOption.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function createProductRoute(router) {
  router.post(
    "/product/:productSlug",
    [authMiddleware, adminMiddleware],
    createProductOptionController
  )
}
