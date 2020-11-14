const specValidator = require('./spec.validator')

const joi = require('joi')

module.exports = joi.object({
  default_spec: specValidator.required(),
  options: joi.array().items(specValidator.and('name', 'model')).optional(),
})