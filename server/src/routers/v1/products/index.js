const createProductRoute = require('./createProduct.route')

function makeProductRouter(router) {
  createProductRoute(router)
  return router
}

module.exports = makeProductRouter