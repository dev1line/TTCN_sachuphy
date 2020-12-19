const createUserController = require('../../../controllers/users/createUser.controller')

const authMiddleware = require('../../../middlewares/auth.middleware')
const adminMiddleware = require('../../../middlewares/admin.middleware')

module.exports = function createUserRoute(router) {
  router.post('/user', [authMiddleware, adminMiddleware], createUserController)
}