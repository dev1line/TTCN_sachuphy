const AccessTokenManager = require('../../security/accessTokenManager')

module.exports = async function signUpController(req, res, next) {
  AccessTokenManager.revoke(req.token)

  return res.status(200).json({
    success: true,
    message: "Signed out successfully",
  })
}
