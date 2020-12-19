const createImageRoute = require('./createImage.route')
const deleteImageRoute = require('./deleteImage.route')
const readImageRoute = require('./readImage.route')

function makeImageRouter(router) {
  createImageRoute(router)
  deleteImageRoute(router)
  readImageRoute(router)
  return router
}

module.exports = makeImageRouter