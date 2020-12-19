const ImageModel = require("../../models/image.model")

module.exports = async function createImageController(req, res) {
  const { originalName, name } = req
  let imageDoc
  
  try {                                  
    imageDoc = await ImageModel.create({
      name,
      originalName,
    })
  } catch (err) {}

  let imageObj = imageDoc.toObject()

  let sanitizedImageObj = sanitizeImageObj(imageObj)

  return res.status(200).json({
    success: true,
    message: "Uploaded successfully",
    image: sanitizedImageObj
  })
}

function sanitizeImageObj(obj) {
  const {__v, ...data} = obj
  return data
}