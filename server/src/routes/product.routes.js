const express = require("express");
const { createProduct, getAllProducts, updateProduct, deleteProduct } = require("../controllers/product.controllers");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProducts);
router.patch("/:id", updateProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
