const UserModel = require("../models/user.model")

module.exports = async (req, res, next) => {
  const user = req.user

  const {role} = user

  if(role !== 'admin') return res.status(401).json({
    message: "You do not have permission to do that."
  })

  next()
}
