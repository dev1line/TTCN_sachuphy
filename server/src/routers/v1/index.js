const router = require('express').Router()

const makeAuthenticationRouter = require('./authentication')

const makeUserRouter = require('./users')

makeAuthenticationRouter(router)

makeUserRouter(router)

module.exports = router