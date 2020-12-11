const UserModel = require("../../models/user.model")

const UserValidator = require("../../validators/user.validator")

module.exports = async function createUserController(req, res, next) {
  const { username, password, role } = req.body

  // Validating
  try {
    await UserValidator.validateAsync({ username, password, role })
    let usernameDoesExist = await UserModel.exists({ username })
    if (usernameDoesExist) throw new Error("username.exist")
  } catch (err) {
    if (err.name === "ValidationError")
      return res.status(422).json({
        success: false,
        message: err.details[0].message,
      })
    return res.status(422).json({
      success: false,
      message: err.message,
    })
  }

  const userDoc = await UserModel.create({
    username,
    password,
    role,
  })

  const user = userDoc.toObject()

  // Extract sensitive data from created user

  const sanitizedUser = sanitizeUser(user)

  return res.status(200).json({
    success: true,
    message: "Created successfully",
    user: sanitizedUser,
  })
}

function sanitizeUser(user) {
  let {password, __v, ...sanitizedUser} = user
  return sanitizedUser
}