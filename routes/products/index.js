const express = require("express");
const router = express.Router();

const {
  getAllProducts,
  getProductName,
  addProduct,
  updateProducts,
  deleteProducts,
} = require("./controller");

router.get("/products", getAllProducts);
router.get("/products/search/:type", getProductName);
router.post("/products", addProduct);
router.put("/products/:id", updateProducts);
router.delete("/products/:id", deleteProducts);

module.exports = router;
