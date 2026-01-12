//* Get all products
const getAllProducts = async (req, res) => {
  try {
    // logic here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to fetch products" });
  }
};

//* Create new product
const createProduct = async (req, res) => {
  try {
    // logic here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to create product" });
  }
};

//* Update product
const updateProduct = async (req, res) => {
  try {
    // logic here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to update product" });
  }
};

//* Delete product
const deleteProduct = async (req, res) => {
  try {
    // logic here
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Failed to delete product" });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  updateProduct,
  deleteProduct,
};
