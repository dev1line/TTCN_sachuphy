const updateUserController = require("../../../controllers/users/updateUser.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function updateUserRoute(router) {
  router.put("/user/:username", [authMiddleware, adminMiddleware], updateUserController)
}
