const signInController = require('../../../controllers/authentication/signIn.controller')

module.exports = function signInRoute(router) {
  router.post('sign-in', signInController)
}