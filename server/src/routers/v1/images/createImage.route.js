const multer = require('multer')
const path = require("path")
const configs = require('../../../configs')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(configs.APP_PATH, "assets/images"))
  },
  filename: function (req, file, cb) {
    const matches = file.originalname.matchAll(/.([A-z]+)$/g)
    const extension = [...matches][0][0]
    const filename = file.fieldname + "-" + Date.now() + extension
    req.name = filename
    req.originalName = file.originalname
    cb(null, filename)
  },
})

var upload = multer({ storage: storage })

const createImageController = require("../../../controllers/images/createImage.controller")

const authMiddleware = require("../../../middlewares/auth.middleware")
const adminMiddleware = require("../../../middlewares/admin.middleware")

module.exports = function createImageRoute(router) {
  router.post(
    "/images",
    [authMiddleware, adminMiddleware, upload.single('image')],
    createImageController
  )
}
