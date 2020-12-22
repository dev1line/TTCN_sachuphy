const readOrderRoute = require("./readOrder.route")

function makeOrderRoute(router) {
  readOrderRoute(router)
  return router
}

module.exports = makeOrderRoute
