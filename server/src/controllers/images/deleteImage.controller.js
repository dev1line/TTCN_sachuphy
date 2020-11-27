const ImageModel = require("../../models/image.model")
const fs = require("fs")
const util = require("util")
const path = require("path")
const configs = require("../../configs")
const async = require("async")
const { uniq } = require("lodash")

const deleteFile = util.promisify(fs.unlink)

module.exports = async function createImageController(req, res, next) {
  const { imageName } = req.params

  if (imageName) {
    const image = await ImageModel.findOne({
      name: imageName,
    }).select("-__v -_id")

    if (!image)
      return res.status(400).json({
        success: false,
        message: "No image found.",
      })

    try {
      await image.deleteOne()
      await deleteFile(
        path.join(configs.APP_PATH, "assets/images/" + imageName)
      )
    } catch (err) {
      return next(err)
    }

    return res.status(200).json({
      success: true,
      message: "Deleted successfully",
      image,
    })
  }

  const { imageNames } = req.body

  if (!Array.isArray(imageNames)) {
    return res.status(400).json({
      success: false,
      message: "imageNames.notArray",
    })
  }

  const uniqueImageNames = uniq(imageNames)

  async.forEach(uniqueImageNames, async (name) => {
    return await ImageModel.deleteOne({ name })
  })

  return res.status(200).json({
    message: "Deleted successfully",
    success: true,
  })
}
