import React, { useEffect, useState } from "react";
import { Box, Button, Grid, Stack, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { productFields } from "../../objectData/productFields";
import TextInputs from "../comman/Inputs/TextInputs";
import TextareaInputs from "../comman/Inputs/TextareaInputs";
import SelectInputs from "../comman/Inputs/SelectInputs";
import CheckboxInputs from "../comman/Inputs/CheckboxInputs";
import FileInputs from "../comman/Inputs/FileInputs";
import { enqueueSnackbar } from "notistack";
import AddIcon from "@mui/icons-material/Add";
import {
  clearSelectedProduct,
  handleAddProduct,
  handleUpdateProduct,
} from "../../store/slices/productSlice";
import { uploadToCloudinary } from "../../utils/uploadToCloudinary";
import { useLocation } from "react-router-dom";

const initialFormState = {
  name: "",
  seoUrlName: "",
  description: "",
  price: "",
  discountPrice: "",
  stock: "",
  unit: [],
  category: "",
  subCategory: "",
  brand: "",
  images: [], // ✅ URLs
  isOrganic: false,
  isActive: true,
};

const AddProduct = () => {
  const { selectedProduct } = useSelector((state) => state.product);
  const [formData, setFormData] = useState(initialFormState);
  // eslint-disable-next-line no-unused-vars
  const [imagePreviews, setImagePreviews] = useState([]);
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const showHeading = pathname === "/product/new";

  useEffect(() => {
    dispatch(clearSelectedProduct());
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setFormData(initialFormState);
    setImagePreviews([]);
  }, [dispatch]);

  useEffect(() => {
    if (selectedProduct) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setFormData(selectedProduct);
      setImagePreviews(selectedProduct.images || []);
    }
  }, [selectedProduct]);

  const handleChange = (e) => {
    const { id, name, value, type, checked } = e.target;
    const key = id || name;

    setFormData((prev) => ({
      ...prev,
      [key]: type === "checkbox" ? checked : value,
    }));
  };

 
  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    const previews = files.map((file) => URL.createObjectURL(file));
    setImagePreviews((prev) => [...prev, ...previews]); 

    try {
      const uploadedUrls = await Promise.all(
        files.map((file) => uploadToCloudinary(file))
      );

      setFormData((prev) => ({
        ...prev,
        images: [...prev.images, ...uploadedUrls], 
      }));
    } catch (error) {
      console.log(error)
      enqueueSnackbar("Image upload failed", { variant: "error" });
    }
  };

  //* Validation 
  const handleValidate = () => {
    if (!formData.name) return error("Product name is required");
    if (!formData.seoUrlName) return error("SEO URL name is required");
    if (!formData.price || Number(formData.price) <= 0)
      return error("Valid price is required");
    if (
      formData.discountPrice &&
      Number(formData.discountPrice) >= Number(formData.price)
    )
      return error("Discount must be less than price");
    if (!formData.stock) return error("Stock is required");
    if (formData.unit.length === 0) return error("Select at least one unit");
    if (!formData.category) return error("Category is required");
    if (!formData.brand) return error("Brand is required");
    if (!formData.description || formData.description.length < 10)
      return error("Description must be at least 10 characters");
    if (!selectedProduct && formData.images.length === 0)
      return error("At least one image is required");

    return true;
  };

  const error = (msg) => {
    enqueueSnackbar(msg, { variant: "error" });
    return false;
  };

  //* Submit
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!handleValidate()) return;

    try {
      if (selectedProduct) {
        await dispatch(
          handleUpdateProduct({
            id: selectedProduct._id,
            payload: formData,
          })
        ).unwrap();

        enqueueSnackbar("Product updated successfully!", {
          variant: "success",
        });
      } else {
        await dispatch(handleAddProduct(formData)).unwrap();
        enqueueSnackbar("Product added successfully!", { variant: "success" });
      }

      setFormData(initialFormState);
      setImagePreviews([]);
    } catch (err) {
      enqueueSnackbar(err || "Something went wrong", { variant: "error" });
    }
  };

  //* Render Fields
  const renderField = (field) => {
    const commonProps = {
      key: field.id,
      id: field.id,
      field,
      value: formData[field.id],
      onChange: handleChange,
      formData: formData,
    };

    switch (field.type) {
      case "text":
      case "number":
        return <TextInputs {...commonProps} />;
      case "textarea":
        return <TextareaInputs {...commonProps} />;
      case "select":
        return <SelectInputs {...commonProps} />;
      case "checkbox":
        return <CheckboxInputs {...commonProps} />;
      case "file":
        return <FileInputs {...commonProps} onChange={handleImageUpload} />;
      default:
        return null;
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ py: 2 }}>
      {showHeading && (
        <Typography variant="h5" mb={3}>
          {selectedProduct ? "Update Product" : "Add New Product"}
        </Typography>
      )}

      <Grid container spacing={2}>
        {productFields.map((field) => {
          const isCheckbox = field.type === "checkbox";
          const isNumber = field.type === "number";
          const isTextarea =
            field.type === "textarea" ||
            field.type === "checkbox" ||
            field.type === "file";
          return (
            <Grid
              key={field.id}
              size={{
                xs: 12,
                sm: 12,
                md: isTextarea ? 12 : isNumber ? 4 : isCheckbox ? 3 : 6,
              }}
            >
              {renderField(field)}
            </Grid>
          );
        })}
      </Grid>

      <Stack alignItems="center">
        <Button
          endIcon={<AddIcon fontSize="large" />}
          fullWidth
          size="large"
          type="submit"
          variant="contained"
          color={selectedProduct ? "warning" : "success"}
          sx={{ mt: 4, mb: 3 }}
        >
          {selectedProduct ? "Update" : "Add"} Product
        </Button>
      </Stack>
    </Box>
  );
};

export default AddProduct;
