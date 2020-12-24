const createImageController = require("../../../controllers/images/createImage.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function createImageRoute(router) {
  router.post(
    "/images",
    [authMiddleware, adminMiddleware],
    createImageController
  )
}
