const readUserController = require('../../../controllers/users/readUser.controller')

const authMiddleware = require('../../../middlewares/auth.middleware')
const adminMiddleware = require('../../../middlewares/admin.middleware')

module.exports = function readUserRoute(router) {
  router.get('/user/:username?', [authMiddleware, adminMiddleware], readUserController)
}