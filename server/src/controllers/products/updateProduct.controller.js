const ProductModel = require("../../models/product.model")
const SpecModel = require("../../models/specification.model")

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

  const { options, default_spec } = req.body

  try {
    await ProductValidator.validateAsync({
      default_spec,
      options,
    })
  } catch (err) {
    console.log(err)
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

  if (!default_spec.name) {
    return res.status(422).json({
      success: false,
      message: "Missing default specification name.",
    })
  }

  const slugs = [default_spec.slug, ...options.map((o) => o.slug)]

  const existSpecBySlug = await SpecModel.findOne({
    slug: {
      $in: slugs,
    },
  }).lean()

  if (existSpecBySlug) {
    return res.status(422).json({
      success: false,
      message: "Slug has been taken",
      slug: existSpecBySlug.slug,
    })
  }
}
