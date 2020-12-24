const ProductModel = require("../../models/product.model")
const SpecModel = require("../../models/specification.model")

const async = require("async")

const {uniq} = require('lodash')

const ProductValidator = require("../../validators/product.validator")

module.exports = async function createProductController(req, res, next) {
  const { default_spec, options } = req.body

  try {
    await ProductValidator.validateAsync({
      default_spec,
      options,
    })
  } catch (err) {
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

  // Check duplicate slug
  const slugs = [default_spec.slug, ...options.map(o => o.slug)]

  if(uniq(slugs).length !== slugs.length) {
    return res.status(422).json({
      success: false,
      message: "Slug must be unique."
    })
  }

  const existSpecBySlug = await SpecModel.findOne({
    slug: {
      $in: slugs
    }
  }).lean()

  if(existSpecBySlug) {
    return res.status(422).json({
      success: false,
      message: "Slug has been taken",
      slug: existSpecBySlug.slug
    })
  }

  const defaultSpecDoc = await SpecModel.create({
    ...default_spec,
  })

  const defaultSpecObj = defaultSpecDoc.toObject()

  const optionsSpecsObjectIds = await async.map(options, async (spec) => {
    const specDoc = await SpecModel.create({
      ...spec,
    })
    const specObj = specDoc.toObject()
    return specObj._id
  })

  console.log(optionsSpecsObjectIds)

  const productDoc = await ProductModel.create({
    default_spec: defaultSpecObj._id,
    options: optionsSpecsObjectIds,
  })

  const productObj = productDoc.toObject()

  const sanitizedProductObj = sanitizeProductObj(productObj)

  const populatedProductObj = { ...sanitizedProductObj, default_spec, options }

  return res.status(200).json({
    success: true,
    message: "Created successfully.",
    product: populatedProductObj,
  })
}

function sanitizeProductObj(product) {
  const { __v, ...sanitizedProduct } = product
  return sanitizedProduct
}
