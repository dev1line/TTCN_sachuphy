const createProductRoute = require('./createProduct.route')
const readProductRoute = require('./readProduct.route')
const updateProductRoute = require('./updateProduct.route')
const checkSlugAvailabilityRoute = require('./checkSlugAvailability.route')

function makeProductRouter(router) {
  createProductRoute(router)
  readProductRoute(router)
  updateProductRoute(router)
  checkSlugAvailabilityRoute(router)
  return router
}

module.exports = makeProductRouter