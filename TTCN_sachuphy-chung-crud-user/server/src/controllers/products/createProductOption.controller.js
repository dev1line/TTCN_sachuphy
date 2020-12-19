const ProductModel = require("../../models/product.model")
const SpecModel = require("../../models/specification.model")

const async = require("async")

const SpecValidator = require("../../validators/spec.validator")

module.exports = async function createProductOptionController(req, res, next) {
  const { ...data } = req.body

  const { productSlug } = req.params

  const specByProductSlug = await SpecModel.findOne({
    slug: productSlug
  })

  if(!specByProductSlug) {
    return res.status(404).json({
      success: false,
      message: "slug.notFound"
    })
  }

  const defaultSlug = await ProductModel.findOne({
    default_spec: specByProductSlug._id
  })

  if(!defaultSlug) {
    return res.status(400).json({
      success: false,
      message: "Slug must be of default specification."
    })
  }

  try {
    await SpecValidator.validateAsync(data)
  } catch (err) {
    if (err.name === "ValidationError")
      return res.status(400).json({
        success: false,
        message: err.message,
      })
  }

  const existSlugByOptionSlug = await SpecModel.findOne({
    slug: data.slug
  })

  if(existSlugByOptionSlug) {
    return res.status(400).json({
      success: false,
      message: "slug.existed"
    })
  }

  const newSpecificationDoc = await SpecModel.create(data)

  const newOptions = [...defaultSlug.options, newSpecificationDoc._id]

  await defaultSlug.updateOne({
    options: newOptions
  })

  const newSpecificationObj = newSpecificationDoc.toObject()

  const sanitizedNewSpecification = sanitizeSpecification(newSpecificationObj)

  return res.status(200).json({
    success: true,
    specification: sanitizedNewSpecification
  })
}

function sanitizeSpecification(specification) {
  const { __v, ...sanitizedSpecification } = specification
  return sanitizedSpecification
}
