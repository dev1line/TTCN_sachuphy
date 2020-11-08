const signInRoute = require('./signIn.route')
const signUpRoute = require('./signUp.route')
const signOutRoute = require('./signOut.route')

function makeAuthenticationRouter(router) {
  signInRoute(router)
  signUpRoute(router)
  signOutRoute(router)
  return router
}

module.exports = makeAuthenticationRouter