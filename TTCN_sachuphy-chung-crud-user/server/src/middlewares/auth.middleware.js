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
    return res.status(401).json({
      message: "Missing token",
    })

  let isVerified

  try {
    isVerified = AccessTokenManager.verify(token)
  } catch (err) {
    return res.status(401).json({
      message: "Missing token or not authorized",
    })
  }

  if (!isVerified)
    return res.status(401).json({
      message: "Missing token or not authorized",
    })

  const { username } = AccessTokenManager.decode(token)

  const user = await UserModel.findOne({ username })
    .select("-password -__v")
    .exec()

  if (!user)
    return res.status(401).json({
      message: "Unauthorized",
    })

  if (user.deleted_at)
    return res.status(401).json({
      message: "Your account has been deleted.",
    })

  req.user = user
  req.token = token

  next()
}
