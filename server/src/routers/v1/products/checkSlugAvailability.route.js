const checkSlugAvailabilityController = require("../../../controllers/products/checkSlugAvailability.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function checkSlugAvailabilityRoute(router) {
  router.get(
    "/slug/check",
    [authMiddleware, adminMiddleware],
    checkSlugAvailabilityController
  )
}
