const signUpController = require('../../../controllers/authentication/signUp.controller')

module.exports = function signInRoute(router) {
  router.post('/sign-up', signUpController)
}