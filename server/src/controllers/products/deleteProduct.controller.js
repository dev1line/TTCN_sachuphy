const SpecModel = require('../../models/specification.model')
const ProductModel = require('../../models/product.model')

const async = require('async')

module.exports = async (req, res) => {
  const {productSlug} = req.params

  const existProductSlug = await SpecModel.findOne({slug: productSlug})

  if(!existProductSlug) {
    return res.status(404).json({
      success: false,
      message: "product.notFound"
    })
  }

  const productWithDefaultSpec = await ProductModel.findOne({
    default_spec: existProductSlug._id
  })

  if(!productWithDefaultSpec) {
    const defaultProductWithOptionSlug = await ProductModel.findOne({
      options: existProductSlug._id
    })

    const existProductSlugId = existProductSlug._id
    
    await existProductSlug.deleteOne()

    await defaultProductWithOptionSlug.updateOne({
      $pull: {
        options: existProductSlugId
      }
    })
    
    return res.status(200).json({
      success: true,
      message: "Deleted successfully."
    })
  }

  // Wipe all of the product options
  await async.forEach(productWithDefaultSpec.options, async optionObjectId => {
    await SpecModel.findByIdAndDelete(optionObjectId)
  })

  // Delete that product default spec
  await existProductSlug.deleteOne()

  // Delete the whole product
  await productWithDefaultSpec.deleteOne()

  return res.status(200).json({
    success: true,
    message: "Deleted successfully."
  })
}