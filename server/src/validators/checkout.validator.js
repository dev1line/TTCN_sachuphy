const joi = require("joi")
const cartValidator = require("./cart.validator")

module.exports = joi.object({
  cart: cartValidator,
  name: joi.string().min(5).max(100).required(),
  address: joi.string().min(5).max(200).required(),
  phone_number: joi.string().regex(/^[0-9\+]+$/).min(9).max(11).required()
})
