const joi = require("joi")

module.exports = joi.object({
  products: joi.array().items(
    joi.object({
      slug: joi.string().required(),
      quantity: joi.number().min(1).max(50),
    })
  ).required(),
})
