const joi = require("joi")

module.exports = joi.object({
  name: joi.string().min(10).max(50).required(),
  processor: joi.string().min(10).max(50).optional(),
  graphic_card: joi.string().min(10).max(50).optional(),
  visibility: joi
    .string()
    .valid(...["public", "hidden"])
    .default("public"),
  discount: joi.number().min(0).max(100).default(0).optional(),
  manufacturer: joi.string().min(1).optional(),
  color: joi.array().items(joi.string()).optional(),
  memory: joi
    .array()
    .items(
      joi.object().keys({
        capacity: joi.number().min(1).max(128),
        speed_bus: joi.number().min(0).max(5000),
        cas: joi.string().optional(),
        text: joi.string().optional(),
      })
    )
    .optional(),
  storage: joi
    .array()
    .items(
      joi.object().keys({
        capacity: joi.number().min(1).max(10000),
        type: joi.string().valid(...["HDD", "SSD", "SSD NVMe"]),
        text: joi.string().optional(),
      })
    )
    .optional(),
  display: joi
    .array()
    .items(
      joi.object().keys({
        resolution: joi.string().optional(),
        size: joi.number().min(1).optional(),
        panel: joi.string().optional(),
        more_info: joi.string().optional(),
      })
    )
    .optional(),
  quantity: joi.number().min(0).default(1),
  features: joi
    .array()
    .items(
      joi.object().keys({
        name: joi.string().optional(),
        more_info: joi.string().optional(),
      })
    )
    .optional(),
  description: joi.string().min(20).max(1000).optional(),
  operating_system: joi.array().items(joi.string()).optional(),
  price: joi.number().min(1000).required(),
  images: joi.array().items(joi.string()),
  model: joi.string().optional(),
  slug: joi.string().min(5).max(100).required(),
})
