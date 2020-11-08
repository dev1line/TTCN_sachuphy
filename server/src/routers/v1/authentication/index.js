const signInRoute = require('./signIn.route')
const signUpRoute = require('./signUp.route')

function makeAuthenticationRouter(router) {
  signInRoute(router)
  signUpRoute(router)
  return router
}

module.exports = makeAuthenticationRouter