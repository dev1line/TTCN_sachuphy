const UserModel = require("../../models/user.model")

module.exports = async function readUserController(req, res, next) {
  const { username } = req.params

  const { limit, page } = {
    limit: 10,
    page: 0,
    is_deleted: false,
    ...req.query,
  }

  if (username) {
    const user = await UserModel.findOne({ username })
      .select("-__v -password")
      .exec()

    return res.status(200).json({
      success: true,
      message: "Read successfully",
      user,
    })
  }

  const users = await UserModel.find()
    .select("-__v -password")
    .skip(+limit * +page)
    .limit(+limit)
    .exec()

  return res.status(200).json({
    success: true,
    message: "Read successfully",
    users,
  })
}
