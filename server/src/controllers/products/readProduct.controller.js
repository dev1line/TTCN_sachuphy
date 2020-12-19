const ProductModel = require("../../models/product.model")
const SpecModel = require("../../models/specification.model")

module.exports = async function readProductController(req, res, next) {
  const role = req.user ? req.user.role : null

  const { productSlug } = req.params

  if (!productSlug) {
    const products = await ProductModel.find()
      .populate({
        path: "default_spec",
        match: {
          $or: [
            {
              visibility: "public",
            },
            {
              visibility: role === "admin" ? "hidden" : "public",
            },
          ],
        },
        select: "-_id -__v",
      })
      .populate({
        path: "options",
        match: {
          $or: [
            {
              visibility: "public",
            },
            {
              visibility: role === "admin" ? "hidden" : "public",
            },
          ],
        },
        select: "-_id -__v",
      })
      .select("-__v")
      .lean()

    return res.status(200).json({
      success: true,
      message: "Read successfully.",
      products: products,
    })
  }

  const spec = await SpecModel.findOne({
    slug: productSlug,
  })
    .select("-__v")
    .lean()

  if (!spec)
    return res.status(404).json({
      success: false,
      message: "Product not found",
    })

  const product = await ProductModel.findOne({
    $or: [
      {
        default_spec: spec._id,
      },
      {
        options: spec._id,
      },
    ],
  })
    .populate({
      path: "default_spec",
      match: {
        $or: [
          {
            visibility: "public",
          },
          {
            visibility: role === "admin" ? "hidden" : "public",
          },
        ],
      },
      select: "-_id -__v",
    })
    .populate({
      path: "options",
      match: {
        $or: [
          {
            visibility: "public",
          },
          {
            visibility: role === "admin" ? "hidden" : "public",
          },
        ],
      },
      select: "-_id -__v",
    })
    .select("-__v")
    .lean()

  return res.status(200).json({
    success: true,
    message: "Read successfully.",
    product,
  })
}
