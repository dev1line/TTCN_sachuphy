const router = require("express").Router()

const makeAuthenticationRouter = require("./authentication")

const makeUserRouter = require("./users")

const makeProductRouter = require("./products")

const makeImageRouter = require("./images")

const makeCartRouter = require("./carts")

const makeCheckoutRoute = require("./checkout")

const makeOrderRoute = require("./orders")

makeCartRouter(router)

makeAuthenticationRouter(router)

makeUserRouter(router)

makeProductRouter(router)

makeImageRouter(router)

makeCheckoutRoute(router)

makeOrderRoute(router)

module.exports = router
