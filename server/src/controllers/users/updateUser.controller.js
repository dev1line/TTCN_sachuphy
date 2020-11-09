const UserModel = require("../../models/user.model")

const UpdateUserValidator = require("../../validators/updateUser.validator")

const { pickBy } = require("lodash")

module.exports = async function updateUserController(req, res, next) {
  const { username } = req.params

  const currentUser = req.user

  if (currentUser.username === username)
    return res.status(401).json({
      success: false,
      message: "You can not modify your own account.",
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

  const sanitizedData = pickBy({...req.body}, (o) => o !== undefined)

  let payload

  try {
    payload = await UpdateUserValidator.validateAsync(sanitizedData)
  } catch (err) {
    if (err.name === "ValidationError")
      return res.status(422).json({
        success: false,
        message: err.details[0].message,
      })
  }

  for(let key in payload) {
    user[key] = payload[key]
  }
  await user.save()

  return res.status(200).json({
    success: true,
    message: "Updated successfully",
  })
}
