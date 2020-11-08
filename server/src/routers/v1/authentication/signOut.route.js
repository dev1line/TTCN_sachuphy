const signOutController = require('../../../controllers/authentication/signOut.controller')

const authMiddleware = require('../../../middlewares/auth.middleware')

module.exports = function signOutRoute(router) {
  router.post('/sign-out', authMiddleware, signOutController)
}