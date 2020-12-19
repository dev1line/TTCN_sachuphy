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
    userDoc[key] = payload[key]
  }
  await userDoc.save()

  const userObj = userDoc.toObject()

  const sanitizedUser = sanitizeUser(userObj)

  return res.status(200).json({
    success: true,
    message: "Updated successfully",
    user: sanitizedUser
  })
}

function sanitizeUser(user) {
  let {password, __v, ...sanitizedUser} = user
  return sanitizedUser
}
