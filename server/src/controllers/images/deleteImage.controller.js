const ImageModel = require("../../models/image.model")
const fs = require('fs')
const util = require('util')
const path = require('path')
const configs = require('../../configs')

const deleteFile = util.promisify(fs.unlink)

module.exports = async function createImageController(req, res, next) {

  const { imageName } = req.params
  
  const image = await ImageModel.findOne({
    name: imageName
  })
  
  if(!image) return res.status(400).json({
    success: false,
    message: "No image found."
  })
  
  try {
    await image.deleteOne()
    await deleteFile(path.join(configs.APP_PATH, "assets/images/" + imageName))
  }
  catch(err) {
    return next(err)
  }

  return res.status(200).json({
    success: true,
    message: "Deleted successfully",
  })
}