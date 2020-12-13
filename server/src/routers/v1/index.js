const router = require('express').Router()

const makeAuthenticationRouter = require('./authentication')

const makeUserRouter = require('./users')

const makeProductRouter = require('./products')

const makeImageRouter = require('./images')

const makeCartRouter = require('./carts')

makeCartRouter(router)

makeAuthenticationRouter(router)

makeUserRouter(router)

makeProductRouter(router)

makeImageRouter(router)

module.exports = router