const createUserRoute = require('./createUser.route')
const readUserRoute = require('./readUser.route')
const updateUserRoute = require('./updateUser.route')
const deleteUserRoute = require('./deleteUser.route')

function makeUserRouter(router) {
  createUserRoute(router)
  readUserRoute(router)
  updateUserRoute(router)
  deleteUserRoute(router)
  return router
}

module.exports = makeUserRouter