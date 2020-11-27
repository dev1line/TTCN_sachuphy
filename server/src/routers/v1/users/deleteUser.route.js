const deleteUserController = require("../../../controllers/users/deleteUser.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function deleteUserRoute(router) {
  router.delete(
    "/user/:username",
    [authMiddleware, adminMiddleware],
    deleteUserController
  )
}
