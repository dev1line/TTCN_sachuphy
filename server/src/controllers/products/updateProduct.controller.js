const SpecModel = require("../../models/specification.model")
const SpecValidator = require("../../validators/spec.validator")

module.exports = async function updateProductController(req, res, next) {
  const { productSlug } = req.params

  const specByProductSlug = await SpecModel.findOne({
    slug: productSlug,
  })

  if (!specByProductSlug)
    return res.status(404).json({
      success: false,
      message: "product.notFound",
    })

  const data = req.body

  data.slug = productSlug

  try {
    await SpecValidator.validateAsync(data)
  }
  catch(err) {
    if(err.name === "ValidationError") {
      return res.status(400).json({
        message: err.details[0].message
      })
    }
  }

  const resultSpec = await specByProductSlug.updateOne(data).select("-__v").lean()

  return res.status(200).json({
    success: true,
    specification: resultSpec
  })
}
