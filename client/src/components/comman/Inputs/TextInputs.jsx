import React from "react";
import { TextField } from "@mui/material";

const TextInputs = ({ field, value, onChange }) => (
  <TextField
    fullWidth
    label={field.label}
    id={field.id}
    type={field.type}
    value={value}
    required={field.required}
    placeholder={field.placeholder}
    onChange={onChange}
  />
);

export default TextInputs;
