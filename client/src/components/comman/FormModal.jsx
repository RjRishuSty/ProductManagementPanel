import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import { useDispatch, useSelector } from "react-redux";
import { handleAddProduct, handleUpdateProduct } from "../../store/slices/productSlice";
import AddProduct from "../ProductsComponents/AddProduct";
import { Divider } from "@mui/material";

const FormModal = ({ open, onClose, mode }) => {
  const dispatch = useDispatch();
  const { selectedProduct } = useSelector((state) => state.product);

  const handleSubmit = (data) => {
    if (mode === "add") {
      dispatch(handleAddProduct(data));
    } else {
      dispatch(handleUpdateProduct({ id: selectedProduct._id, data }));
    }
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose} maxWidth="md" fullWidth>
      <DialogTitle sx={{borderBottom:'1px solid #ccc',mb:2}}>
        {mode === "add" ? "Add New Product" : "Update Product"}
      </DialogTitle>
      <DialogContent>
        <AddProduct onSubmit={handleSubmit} useIn='modal' />
      </DialogContent>
    </Dialog>
  );
};

export default FormModal;
