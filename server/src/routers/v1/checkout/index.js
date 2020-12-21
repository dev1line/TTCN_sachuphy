const checkoutRoute = require("./checkout.route")

function makeCheckoutRoute(router) {
  checkoutRoute(router)
  return router
}

module.exports = makeCheckoutRoute
