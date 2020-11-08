const joi = require("joi")

module.exports = joi
  .object({
    username: joi.string().alphanum().min(6).max(20).required(),
    password: joi.string().min(6).max(20).required(),
    confirm_password: joi.ref("password"),
  })
  .with("password", "confirm_password")
