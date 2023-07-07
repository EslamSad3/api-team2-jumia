const { uploadMixOfFiles } = require("../middlewares/uploadImageMiddleware");
const {
  createProduct,
  getProducts,
  getProduct,
  updateProduct,
  deleteProduct,
} = require("../services/productService");

const router = require("express").Router();
let fields = [
  { name: "imageCover", maxCount: 1 },
  { name: "images", maxCount: 3 },
];
router
  .route("/")
  .post(uploadMixOfFiles(fields, "products"), createProduct)
  .get(getProducts);
router
  .route("/:id")
  .get(getProduct)
  .put(uploadMixOfFiles(fields, "products"), updateProduct)
  .delete(deleteProduct);

module.exports = router;
