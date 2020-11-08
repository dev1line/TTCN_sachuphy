const joi = require("joi")

module.exports = joi.object({
  username: joi.string().alphanum().min(6).max(20).required(),
  password: joi.string().min(6).max(20).required(),
})
