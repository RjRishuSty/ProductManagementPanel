const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer(); // memory storage for now
const {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} = require("../controllers/product.controllers");

// GET all products
router.get("/", getAllProducts);

// CREATE product
router.post("/", upload.none(), createProduct); // <-- upload.none() parses text fields

// UPDATE product
router.patch("/:id", upload.none(), updateProduct);

// DELETE product
router.delete("/:id", deleteProduct);

module.exports = router;
