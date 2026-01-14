import React from "react";
import { TextField } from "@mui/material";

const TextareaInputs = ({ field, value, onChange }) => (
  <TextField
    fullWidth
    label={field.label}
    id={field.id}
    value={value}
    required={field.required}
    placeholder={field.placeholder}
    multiline
    rows={3}
    onChange={onChange}
  />
);

export default TextareaInputs;
