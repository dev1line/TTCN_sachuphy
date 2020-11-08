function extractTokenFromHeaders(headers) {
  const authorizationHeader = headers.authorization
  if (!authorizationHeader) return null

  return authorizationHeader.replace("Bearer ", "")
}

const UserModel = require("../models/user.model")
const AccessTokenManager = require("../security/accessTokenManager")

module.exports = async (req, res, next) => {
  const token = extractTokenFromHeaders(req.headers)
  if (!token)
    return res.status(400).json({
      message: "Missing token",
    })

  const isVerified = AccessTokenManager.verify(token)

  if (!isVerified)
    return res.status(400).json({
      message: "Missing token or not authorized",
    })

  const { username } = AccessTokenManager.decode(token)

  const user = await UserModel.findOne({ username })
    .select("-password -__v")
    .exec()

  req.user = user
  req.token = token

  next()
}
