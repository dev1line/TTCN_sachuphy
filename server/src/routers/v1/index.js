const router = require('express').Router()

const makeAuthenticationRouter = require('./authentication')

makeAuthenticationRouter(router)

module.exports = router