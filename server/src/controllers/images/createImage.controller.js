const ImageModel = require("../../models/image.model")

const multer = require("multer")
const path = require("path")
const configs = require("../../configs")

const allowedImageExtensions = ["jpg", "jpeg", "png"]

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(configs.APP_PATH, "assets/images"))
  },
  filename: function (req, file, cb) {
    const matches = file.originalname.matchAll(/.([A-z]+)$/g)
    const extension = [...matches][0][0]
    if (!allowedImageExtensions.includes(extension.slice(1)))
      return cb(new multer.MulterError("File extension not allowed."))
    const filename = file.fieldname + "-" + Date.now() + extension
    req.name = filename
    req.originalName = file.originalname
    cb(null, filename)
  },
})

var upload = multer({ storage: storage }).single("image")

module.exports = async function createImageController(req, res, next) {
  await new Promise((resolve) => {
    upload(req, res, function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(400).json({
          success: false,
          message: "File extension not allowed",
        })
      } else if (err) {
        return next(err)
      }
      return resolve()
    })
  })

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
    image: sanitizedImageObj,
  })
}

function sanitizeImageObj(obj) {
  const { __v, ...data } = obj
  return data
}
