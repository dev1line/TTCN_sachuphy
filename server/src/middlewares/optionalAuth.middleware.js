function extractTokenFromHeaders(headers) {
  const authorizationHeader = headers.authorization
  if (!authorizationHeader) return null

  return authorizationHeader.replace("Bearer ", "")
}

const UserModel = require("../models/user.model")
const AccessTokenManager = require("../security/accessTokenManager")

module.exports = async (req, res, next) => {
  const token = extractTokenFromHeaders(req.headers)
  if (!token) return next()

  let isVerified

  try {
    isVerified = AccessTokenManager.verify(token)
  } catch (err) {
    return next()
  }

  if (!isVerified) return next()

  const { username } = AccessTokenManager.decode(token)

  const user = await UserModel.findOne({ username })
    .select("-password -__v")
    .exec()

  if (!user) return next()

  if (user.deleted_at) return next()

  req.user = user
  req.token = token

  return next()
}
