const SpecModel = require("../../models/specification.model")

module.exports = async function checkSlugAvailabilityController(req, res, next) {
  const {slug} = req.query

  if(!slug) return res.status(400).json({
    message: "Missing slug.",
    success: false
  })

  const isSlugTaken = await SpecModel.exists({
    slug
  })
  
  return res.status(200).json({
    success: true,
    message: isSlugTaken ? "slug.taken" : "slug.available",
    availability: !isSlugTaken
  })
}
