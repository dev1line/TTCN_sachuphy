const deleteImageController = require("../../../controllers/images/deleteImage.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function deleteImageRoute(router) {
  router.delete(
    "/images/:imageName",
    [authMiddleware, adminMiddleware],
    deleteImageController
  )
}
