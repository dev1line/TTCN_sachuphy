const readCartRoute = require("./readCart.route")
const updateCartRoute = require("./updateCart.route")

function makeCartRouter(router) {
  updateCartRoute(router)
  readCartRoute(router)
  return router
}

module.exports = makeCartRouter
