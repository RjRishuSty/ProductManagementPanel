import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  IconButton,
  Typography,
  Tooltip,
  Chip,
  Button,
  Box,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";
import { useDispatch, useSelector } from "react-redux";
import {
  handleGetAllProduct,
  handleDeleteProduct,
  setSelectedProduct,
} from "../../store/slices/productSlice";
import Paginations from "../comman/Paginations";
import NotFound from "./NotFound";
import FormModal from "./FormModal";

const Tables = () => {
  const { products, loading } = useSelector((state) => state.product);
  const dispatch = useDispatch();

  // modal state
  const [openModal, setOpenModal] = useState(false);
  const [formMode, setFormMode] = useState("add"); // "add" | "edit"

  // pagination state
  const [currentPage, setCurrentPage] = useState(1);

  useEffect(() => {
    dispatch(handleGetAllProduct());
  }, [dispatch]);

  /* ---------------- Pagination Logic ---------------- */
  const itemsPerPage = 5;
  const totalPages = Math.ceil(products.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  const handlePrev = () => currentPage > 1 && setCurrentPage((p) => p - 1);
  const handleNext = () =>
    currentPage < totalPages && setCurrentPage((p) => p + 1);

  /* ---------------- Add Product ---------------- */
  const handleAddProduct = () => {
    dispatch(setSelectedProduct(null)); // clear selected product
    setFormMode("add");
    setOpenModal(true);
  };

  /* ---------------- Edit Product ---------------- */
  const handleEdit = (product) => {
    dispatch(setSelectedProduct(product)); // set selected product
    setFormMode("edit");
    setOpenModal(true);
  };

  /* ---------------- Delete Product ---------------- */
  const handleDelete = async (product) => {
    if (window.confirm(`Are you sure you want to delete "${product.name}"?`)) {
      await dispatch(handleDeleteProduct(product._id));
      alert("Product deleted successfully!");
    }
  };

  if (loading) return <Typography>Loading...</Typography>;

  return (
    <>
      {/* Add Product Button */}
      <Box display="flex" justifyContent="flex-end" mb={2}>
        <Button
          variant="contained"
          color="success"
          startIcon={<AddIcon />}
          onClick={handleAddProduct}
        >
          Add Product
        </Button>
      </Box>

      {/* Table */}
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: "primary.dark" }}>
              <TableCell sx={{ color: "#fff" }}>SN</TableCell>
              <TableCell sx={{ color: "#fff" }}>Name</TableCell>
              <TableCell sx={{ color: "#fff" }}>Category</TableCell>
              <TableCell sx={{ color: "#fff" }}>Brand</TableCell>
              <TableCell sx={{ color: "#fff" }}>Price</TableCell>
              <TableCell sx={{ color: "#fff" }}>Discount Price</TableCell>
              <TableCell sx={{ color: "#fff" }}>Stock</TableCell>
              <TableCell sx={{ color: "#fff" }}>Status</TableCell>
              <TableCell sx={{ color: "#fff" }} align="center">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {currentProducts.map((product, index) => (
              <TableRow
                key={product._id}
                sx={{
                  borderBottom: "1.6px solid #ccc",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "action.hover",
                    cursor: "pointer",
                  },
                }}
              >
                <TableCell>{startIndex + index + 1}</TableCell>
                <TableCell>{product.name}</TableCell>
                <TableCell>{product.category}</TableCell>
                <TableCell>{product.brand}</TableCell>
                <TableCell>₹{product.price}</TableCell>
                <TableCell>₹{product.discountPrice}</TableCell>
                <TableCell>{product.stock}</TableCell>
                <TableCell>
                  <Chip
                    label={product.isActive ? "Active" : "Inactive"}
                    sx={{
                      color: product.isActive ? "#fff" : "#000",
                      bgcolor: product.isActive ? "success.main" : "#D3D3D3",
                    }}
                  />
                </TableCell>
                <TableCell align="center">
                  <Tooltip title="Edit">
                    <IconButton
                      color="inherit"
                      sx={{ bgcolor: "action.selected", mr: 1 }}
                      onClick={() => handleEdit(product)}
                    >
                      <EditIcon />
                    </IconButton>
                  </Tooltip>

                  <Tooltip title="Delete">
                    <IconButton
                      color="error"
                      sx={{ bgcolor: "action.selected" }}
                      onClick={() => handleDelete(product)}
                    >
                      <DeleteIcon />
                    </IconButton>
                  </Tooltip>
                </TableCell>
              </TableRow>
            ))}

            {products.length === 0 && (
              <TableRow>
                <TableCell colSpan={9} align="center">
                  <NotFound useIn="inProduct" height={350} />
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>

      {/* Pagination */}
      {products.length > itemsPerPage && (
        <Paginations
          currentPage={currentPage}
          totalPages={totalPages}
          onPrev={handlePrev}
          onNext={handleNext}
        />
      )}

      {/* Modal for Add / Update */}
      <FormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        mode={formMode}
      />
    </>
  );
};

export default Tables;
