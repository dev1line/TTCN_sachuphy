const ProductModel = require("../../models/product.model")
const SpecModel = require("../../models/specification.model")

const async = require("async")

const slugify = require("slugify")
const faker = require('faker')

const ProductValidator = require("../../validators/product.validator")

module.exports = async function createProductController(req, res, next) {
  const { default_spec, options } = req.body

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

  if(!default_spec.name || !default_spec.model) {
    return res.status(422).json({
      success: false,
      message: "Missing defaut specification name and model"
    })
  }

  let defaultSpecSlug = slugify(default_spec.name + default_spec.model)

  

  while(await SpecModel.exists({slug: defaultSpecSlug})) {
    defaultSpecSlug += defaultSpecSlug + faker.random.number(1000)
  }

  const defaultSpecDoc = await SpecModel.create({
    ...default_spec
  })

  const defaultSpecObj = defaultSpecDoc.toObject()

  const optionsSpecsObjectIds = await async.map(options, async (spec) => {
    const specDoc = await SpecModel.create(spec)
    const specObj = specDoc.toObject()
    return specObj._id
  })

  const productDoc = await ProductModel.create({
    default_spec: defaultSpecObj._id,
    options: optionsSpecsObjectIds,
  })

  const productObj = productDoc.toObject()

  const sanitizedProductObj = sanitizeProductObj(productObj)

  const populatedProductObj = {...sanitizedProductObj, default_spec, options}

  return res.status(200).json({
    success: true,
    message: "Created successfully.",
    product: populatedProductObj,
  })
}

function sanitizeProductObj(product) {
  const {__v, ...sanitizedProduct} = product
  return sanitizedProduct 
}