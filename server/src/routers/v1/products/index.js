const createProductRoute = require('./createProduct.route')
const createProductOptionRoute = require('./createProductOption.route')
const readProductRoute = require('./readProduct.route')
const updateProductRoute = require('./updateProduct.route')
const deleteProductRoute = require('./deleteProduct.route')
const checkSlugAvailabilityRoute = require('./checkSlugAvailability.route')

function makeProductRouter(router) {
  createProductRoute(router)
  createProductOptionRoute(router)
  readProductRoute(router)
  updateProductRoute(router)
  checkSlugAvailabilityRoute(router)
  deleteProductRoute(router)
  return router
}

module.exports = makeProductRouter