const { uploadSingleFile } = require("../middlewares/uploadImageMiddleware");
const {
  createBrand,
  getBrands,
  getBrand,
  updateBrand,
  deleteBrand,
} = require("../services/brandService");

const router = require("express").Router();

router
  .route("/")
  .post(uploadSingleFile("image", "brands"), createBrand)
  .get(getBrands);
router
  .route("/:id")
  .get(getBrand)
  .put(uploadSingleFile("image", "brands"), updateBrand)
  .delete(deleteBrand);

module.exports = router;
