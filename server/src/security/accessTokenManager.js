const jwt = require('jsonwebtoken')

const configs = require('../configs')

const { PRIVATE_KEY } = configs

const moment = require('moment')

const revokedTokens = []

module.exports = {
  generate: function(payload) {
    return jwt.sign(payload, PRIVATE_KEY, {
      expiresIn: moment.duration(60, 'minutes').asMilliseconds()
    })
  },
  verify: function(token) {
    if(revokedTokens.includes(token)) return false
    return jwt.verify(token, PRIVATE_KEY)
  },
  revoke: function(token) {
    revokedTokens.push(token)
  },
  decode: function(token) {
    return jwt.decode(token)
  }
}