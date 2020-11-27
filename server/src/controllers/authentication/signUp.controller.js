const UserModel = require("../../models/user.model")

const SignUpValidator = require("../../validators/signUp.validator")

module.exports = async function signUpController(req, res, next) {
  const { username, password, confirm_password } = req.body

  // Validating
  try {
    await SignUpValidator.validateAsync({ username, password, confirm_password })
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
      message: err.message
    })
  }

  await UserModel.create({
    username,
    password,
  })

  return res.status(200).json({
    success: true,
    message: "Registered successfully",
  })
}
