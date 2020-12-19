const joi = require("joi")

module.exports = joi.object({
  password: joi.string().min(6).max(20).optional(),
  role: joi
    .string()
    .valid(...["admin", "user"])
    .optional(),
})
