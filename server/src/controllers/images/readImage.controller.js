const ImageModel = require("../../models/image.model")

const configs = require('../../configs')

const path = require('path')

module.exports = async function createImageController(req, res, next) {

  const { imageName } = req.params

  if(!imageName) {
    const images = await ImageModel.find().select('-__v').lean()

    return res.status(200).json({
      success: true,
      message: "Read successfully",
      images
    })
  }
  
  const imageDoesExist = await ImageModel.exists({
    name: imageName
  })
  
  if(!imageDoesExist) return res.status(404).json({
    success: false,
    message: "No image found."
  })
  
  return res.status(200).sendFile(path.join(configs.APP_PATH, "assets/images", imageName))
}