const UserModel = require("../../models/user.model")

const SignInValidator = require("../../validators/signIn.validator")

const AccessTokenManager = require("../../security/accessTokenManager")

const bcrypt = require("bcrypt")

module.exports = async function signInController(req, res, next) {
  const { username, password } = req.body

  // Validating
  try {
    await SignInValidator.validateAsync({
      username,
      password,
    })
    let user = await UserModel.findOne({ username }).select('-__v').exec()
    if (!user) throw new Error()
    let isPasswordMatched = await bcrypt.compare(password, user.password)
    if (!isPasswordMatched) throw new Error("credentials.wrong")
    if(user.deleted_at) throw new Error("user.deleted")
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

  let token = AccessTokenManager.generate({
    username,
  })

  return res.status(200).json({
    success: true,
    message: "Signed in successfully",
    token,
  })
}
