const readImageController = require("../../../controllers/images/readImage.controller")

module.exports = function readImageRoute(router) {
  router.get(
    "/images/:imageName?",
    readImageController
  )
}
