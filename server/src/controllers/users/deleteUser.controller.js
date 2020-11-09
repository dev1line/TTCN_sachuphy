const UserModel = require("../../models/user.model")

module.exports = async function deleteUserController(req, res, next) {
  const { username } = req.params

  const currentUser = req.user

  if (currentUser.username === username)
    return res.status(401).json({
      success: false,
      message: "You can not delete your own account.",
    })

  const user = await UserModel.findOne({ username })

  if (!user)
    return res.status(422).json({
      success: false,
      message: "user.notFound",
    })

  if (user.deleted_at)
    return res.status(422).json({
      success: false,
      message: "user.deleted",
    })

  await user.updateOne({
    deleted_at: Date.now()
  })

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
  })
}
