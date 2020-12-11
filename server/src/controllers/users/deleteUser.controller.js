const UserModel = require("../../models/user.model")

module.exports = async function deleteUserController(req, res, next) {
  const { username } = req.params

  const currentUser = req.user

  if (currentUser.username === username)
    return res.status(400).json({
      success: false,
      message: "You can not delete your own account.",
    })

  const userDoc = await UserModel.findOne({ username })

  if (!userDoc)
    return res.status(422).json({
      success: false,
      message: "user.notFound",
    })

  if (userDoc.deleted_at)
    return res.status(422).json({
      success: false,
      message: "user.deleted",
    })

  await userDoc.updateOne({
    deleted_at: Date.now()
  })

  const userObj = userDoc.toObject()

  // Extract sensitive data from created user

  const sanitizedUser = sanitizeUser(userObj)

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
    user: sanitizedUser
  })
}

function sanitizeUser(user) {
  let {password, __v, ...sanitizedUser} = user
  return sanitizedUser
}